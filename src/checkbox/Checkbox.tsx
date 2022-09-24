import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  defaultChecked?: boolean
}

const Checkbox = (props: CheckboxProps) => {
  const { className, children, defaultChecked = false, ...rest } = props

  const [checked, setChecked] = useState("checked" in props ? props.checked : defaultChecked)

  useEffect(() => {
    if (!("checked" in props)) {
      return
    }
    setChecked(props.checked)
  }, [props.checked])

  const handleChange = (e: any) => {
    if ("checked" in props) {
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
