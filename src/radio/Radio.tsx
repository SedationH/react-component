import React, { FormEventHandler, useEffect, useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"
import RadioGroupContext from "./context"
import { RadioChangeEvent, RadioGroupContextProps } from "./interface"

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  value?: string
  onChange?: FormEventHandler<HTMLInputElement>
}

const Radio = (props: RadioProps) => {
  const { className, style, children, disabled, defaultChecked = false, onChange, ...restProps } = props

  const onChangeWithContext = (e: RadioChangeEvent) => {
    onChange?.(e)
    groupContext?.onChange?.(e)
  }

  const groupContext = React.useContext(RadioGroupContext)

  const radioProps: RadioProps = { ...restProps }

  if (groupContext) {
    radioProps.onChange = onChangeWithContext
    radioProps.checked = props.value === groupContext.value
    radioProps.disabled = radioProps.disabled || groupContext.disabled
  }

  const [checked, setChecked] = useState(() => {
    // groupContext 具有更高的优先级
    if ("checked" in props) {
      return radioProps.checked
    } else {
      return defaultChecked
    }
  })

  useEffect(() => {
    if (radioProps.checked === undefined) {
      return
    }
    setChecked(radioProps.checked)
  }, [radioProps.checked])

  const handleChange: RadioGroupContextProps["onChange"] = (e) => {
    onChange?.(e)
    if ("checked" in props) {
      return
    }
    setChecked(true)
  }

  const prefixCls = getPrefixCls("radio")

  const wrapperClassString = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: checked,
      [`${prefixCls}-wrapper-disabled`]: disabled,
    },
    className
  )

  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
  })

  // label 和 input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
  return (
    <label style={style} className={wrapperClassString}>
      <span className={classString}>
        <input
          className={`${prefixCls}-input`}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          type="radio"
          {...radioProps}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  )
}

export default Radio
