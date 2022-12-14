import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Checkbox from "./index"

import "./index.less"
import "../button/index.less"

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: "Checkbox",
}

export const AlwaysTrue = () => {
  return (
    <>
      <Checkbox checked>Radio</Checkbox>
    </>
  )
}

export const defaultChecked = () => {
  return (
    <>
      <Checkbox defaultChecked />
    </>
  )
}

export const UnderControl = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Checkbox checked={checked}>Radio</Checkbox>
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

// export const NotUnderControl = () => {
//   return (
//     <>
//       <Radio>Radio</Radio>
//     </>
//   )
// }

export const OnChange = () => {
  return (
    <>
      <Checkbox
        onChange={(e) => {
          console.log("sedationh  ni shi zhu", e)
        }}
      >
        Radio
      </Checkbox>
    </>
  )
}
