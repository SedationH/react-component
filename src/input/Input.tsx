import React, { useEffect, useState } from "react"
import { getPrefixCls } from "../utils/style-utils"
import classNames from "classnames"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  maxLength?: number
}

const Input = (props: InputProps) => {
  const { className, children, defaultValue = "", onChange, ...rest } = props

  const [value, setValue] = useState(props.value !== undefined ? props.value : defaultValue)

  useEffect(() => {
    if (props.value === undefined) {
      return
    }
    setValue(props.value)
  }, [props.value])

  const handleInput: InputProps["onChange"] = (e) => {
    onChange?.(e)
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

  const $input = <input value={value} onInput={handleInput} className={classes} {...rest}></input>

  if (props.maxLength === undefined) {
    return $input
  }

  return (
    <span className="ant-input-affix-wrapper">
      {$input}
      <span className={`${prefixCls}-suffix`}>
        <span className={`${prefixCls}-show-count-suffix`}>
          {value.length} / {props.maxLength}
        </span>
      </span>
    </span>
  )
}

export default Input
