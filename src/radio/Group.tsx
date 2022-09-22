import classNames from "classnames"
import React, { FormEventHandler, useEffect, useState } from "react"
import { getPrefixCls } from "../utils/style-utils"
import { RadioGroupContextProvider } from "./context"
import { RadioGroupContextProps } from "./interface"

interface RadioGroupProps extends React.HTMLAttributes<HTMLElement> {
  value?: string
  disabled?: boolean
  defaultValue?: string
  onChange?: FormEventHandler<HTMLInputElement>
}

function RadioGroup(props: RadioGroupProps) {
  const { children, className, defaultValue, onChange } = props

  const [value, setValue] = useState("value" in props ? props.value : defaultValue)

  useEffect(() => {
    if (props.value === undefined) {
      return
    }
    setValue(props.value)
  }, [props.value])

  const handleChange: RadioGroupContextProps["onChange"] = (e) => {
    onChange?.(e)
    if ("value" in props) {
      return
    }
    // TODO: 修复这里的类型问题
    const value = (e.target as any).value
    setValue(value)
  }

  const prefixCls = getPrefixCls("radio")

  const groupPrefixCls = `${prefixCls}-group`

  const classString = classNames(groupPrefixCls, className)

  return (
    <div className={classString}>
      <RadioGroupContextProvider
        value={{
          onChange: handleChange,
          value,
          disabled: props.disabled,
        }}
      >
        {children}
      </RadioGroupContextProvider>
    </div>
  )
}

export default RadioGroup
