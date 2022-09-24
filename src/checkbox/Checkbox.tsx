import React, { FormEventHandler, useContext, useEffect, useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"
import { CheckboxContext } from "./Group"

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  defaultChecked?: boolean
  value?: string
  onChange?: FormEventHandler<HTMLInputElement>
}

const Checkbox = (props: CheckboxProps) => {
  const { className, children, defaultChecked = false, value, onChange, ...rest } = props

  const groupContext = useContext(CheckboxContext)

  const checkedProps = { ...rest }

  if (groupContext) {
    checkedProps.checked = value ? groupContext.value.includes(value) : props.checked
  }

  const [checked, setChecked] = useState("checked" in checkedProps ? checkedProps.checked : defaultChecked)

  useEffect(() => {
    if (!("checked" in checkedProps)) {
      return
    }
    setChecked(checkedProps.checked)
  }, [checkedProps.checked])

  const handleChange: CheckboxProps["onChange"] = (e) => {
    onChange?.(e)
    // TODO：解决 类型问题
    if (value !== undefined) {
      let newGroupValue = groupContext?.value.slice() || []
      if (!checked) {
        // 将要被选中
        newGroupValue.push(value)
      } else {
        newGroupValue = newGroupValue.filter((v) => v !== value)
      }
      groupContext?.onChange?.(newGroupValue)
    }
    if ("checked" in checkedProps) {
      return
    }
    setChecked(!checked)
  }

  const prefixCls = getPrefixCls("checkbox")

  const wrapperCls = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: checked,
    },
    className
  )

  const cls = classNames(prefixCls, {
    [`${prefixCls}-checked`]: checked,
  })

  return (
    <label className={wrapperCls}>
      <span className={cls}>
        <input checked={checked} type="checkbox" className="ant-checkbox-input" onChange={handleChange} />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  )
}

export default Checkbox
