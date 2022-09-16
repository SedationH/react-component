import { ComponentStory, ComponentMeta } from "@storybook/react"
import Radio from "./index"

import "./index.less"

export default {
  title: "Example/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Radio",
  checked: false,
  disabled: false,
}

export const BasicUse = () => {
  return (
    <>
      <Radio>Radio</Radio>
    </>
  )
}
