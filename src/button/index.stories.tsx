import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "./index"

import "./index.less"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

const style = {
  marginLeft: 10,
}

export const BasicUse = () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button style={style}>Default Button</Button>
      <Button type="dashed" style={style}>
        Dashed Button
      </Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link" style={style}>
        Link Button
      </Button>
    </>
  )
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  children: "This is Primary",
}
