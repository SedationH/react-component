import React, { ReactNode } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"
import { tuple } from "../_util/type"

const ButtonTypes = tuple("default", "primary", "ghost", "dashed", "link", "text")
export type ButtonType = typeof ButtonTypes[number]
const SizeTypes = tuple("small", "middle", "large")
export type SizeType = typeof SizeTypes[number]
const ButtonHTMLTypes = tuple("submit", "button", "reset")
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

interface NativeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: SizeType
  type?: ButtonType
  htmlType?: ButtonHTMLType
  children?: ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, NativeButtonProps>((props: NativeButtonProps, ref) => {
  const { className, size = "middle", type = "default", children, style, onClick, htmlType = "button", ...rest } = props

  const prefixCls = getPrefixCls("btn")

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${type}`]: type,
    },
    className
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO 做一些额外行为
    onClick?.(e)
  }

  return (
    <button {...rest} type={htmlType} ref={ref} className={classes} style={style} onClick={handleClick}>
      {children}
    </button>
  )
})

export default Button
