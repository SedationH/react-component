export type RadioChangeEvent = React.FormEvent<HTMLInputElement>

export interface RadioGroupContextProps {
  onChange: (e: RadioChangeEvent) => void
  value: any
  disabled?: boolean
  name?: string
}
