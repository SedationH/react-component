import React, { useEffect, useState } from "react"
import { getPrefixCls } from "../utils/style-utils"
import classNames from "classnames"

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputProps) => {
  const { className, children, defaultValue = "", ...rest } = props

  const [value, setValue] = useState(props.value !== undefined ? props.value : defaultValue)

  useEffect(() => {
    if (props.value === undefined) {
      return
    }
    setValue(props.value)
  }, [props.value])

  const handleInput: InputProps["onChange"] = (e) => {
    props?.onChange?.(e)
    if (props.value !== undefined) {
      return
    }
    const newValue = e.target.value
    setValue(newValue)
  }

  const prefixCls = getPrefixCls("input")

  const classes = classNames(
    prefixCls,
    {
      // [`${prefixCls}-${type}`]: type,
    },
    className
  )

  return (
    <>
      <input value={value} onInput={handleInput} className={classes} type="text"></input>
    </>
  )
}

export default Input
