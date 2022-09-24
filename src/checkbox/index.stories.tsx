import { ComponentStory, ComponentMeta } from "@storybook/react"
import Checkbox from "./index"

import "./index.less"

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: "Checkbox",
}

export const BasicUse = () => {
  return (
    <>
      <input type="checkbox" />
    </>
  )
}
