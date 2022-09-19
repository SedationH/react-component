import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Radio from "./index"

import "./index.less"
import "../button/index.less"

export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: "Radio",
  disabled: false,
}

export const UnderControl = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Radio checked={checked}>Radio</Radio>
      <Button
        onClick={() => {
          setChecked(!checked)
        }}
      >
        点击切换
      </Button>
    </>
  )
}

export const NotUnderControl = () => {
  return (
    <>
      <Radio>Radio</Radio>
    </>
  )
}
