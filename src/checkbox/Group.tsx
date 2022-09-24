import React from "react"

interface CheckboxGroupProps extends React.HTMLAttributes<HTMLElement> {
  value?: string[]
  defaultValue?: string
}

export const CheckboxContext =
  React.createContext<{
    value: string[]
  } | null>(null)

function CheckboxGroup(props: CheckboxGroupProps) {
  const { children, value = [] } = props

  return (
    <div>
      <CheckboxContext.Provider
        value={{
          value,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </div>
  )
}

export default CheckboxGroup
