import React, { FormEventHandler, ReactNode } from "react"

interface CheckboxGroupProps {
  value?: string[]
  defaultValue?: string
  onChange?: (v: string[]) => void

  children?: ReactNode
}

export const CheckboxContext =
  React.createContext<{
    value: string[]
    onChange?: (v: string[]) => void
  } | null>(null)

function CheckboxGroup(props: CheckboxGroupProps) {
  const { children, value = [], onChange } = props

  return (
    <div>
      <CheckboxContext.Provider
        value={{
          value,
          onChange,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </div>
  )
}

export default CheckboxGroup
