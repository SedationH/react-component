import React from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"

interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
}

const Radio = (props: RadioProps) => {
  const { className, children, ...rest } = props

  const prefixCls = getPrefixCls("btn")

  const classes = classNames(
    prefixCls,
    {
      // [`${prefixCls}-${type}`]: type,
    },
    className
  )

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

export default Radio
