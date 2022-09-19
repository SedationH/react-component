import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { getPrefixCls } from "../utils/style-utils"

interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  disabled?: boolean
}

const Radio = (props: RadioProps) => {
  const { className, style, children, disabled, defaultChecked = false, ...rest } = props

  const [checked, setChecked] = useState("checked" in props ? props.checked : defaultChecked)

  useEffect(() => {
    setChecked(props.checked)
  }, [props.checked])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // 受控情况
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
          {...rest}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  )
}

export default Radio
