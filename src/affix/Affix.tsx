import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"
import { getTargetRect } from "./utils"
import ResizeObserver from "rc-resize-observer"

interface AffixProps extends React.HTMLAttributes<HTMLDivElement> {
  offsetTop?: number
}

const Affix = (props: AffixProps) => {
  const { className, children, offsetTop = 0, ...rest } = props

  const prefixCls = getPrefixCls("affix")

  const classes = classNames(prefixCls, className)

  const fixedNode = useRef(null)
  const placeholderNode = useRef(null)
  const [isFixed, setIsFixed] = useState(false)
  const [style, setStyle] = useState<{
    height?: number
  }>({})

  const handleStyleChange = () => {
    const $fixedNode = fixedNode.current
    if (!$fixedNode) {
      return
    }
    const { height } = getTargetRect($fixedNode)
    setStyle({
      height,
    })
  }

  useEffect(() => {
    const scrollHandler = () => {
      const $placeholderNode = placeholderNode.current
      if (!$placeholderNode) {
        return
      }
      const { top } = getTargetRect($placeholderNode)
      if (top <= offsetTop) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <div style={style} ref={placeholderNode}>
      <ResizeObserver
        onResize={() => {
          handleStyleChange()
        }}
      >
        <div
          ref={fixedNode}
          style={
            isFixed
              ? {
                  top: offsetTop,
                }
              : {}
          }
          className={classNames([isFixed && classes])}
        >
          {children}
        </div>
      </ResizeObserver>
    </div>
  )
}

export default Affix
