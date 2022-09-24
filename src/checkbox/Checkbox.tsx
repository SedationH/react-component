import React, { useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  defaultChecked?: boolean
}

const Checkbox = (props: CheckboxProps) => {
  const { className, children, ...rest } = props

  const [checked, setChecked] = useState(false)

  const handleChange = (e: any) => {
    const checked = e.target.checked
    console.log("sedationh", { checked })
    setChecked(checked)
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
        <input type="checkbox" className="ant-checkbox-input" onChange={handleChange} />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>Checkbox</span>
    </label>
  )
}

export default Checkbox
