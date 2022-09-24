import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Checkbox from "./index"

const { Group } = Checkbox

import "./index.less"
import "../button/index.less"

export default {
  title: "Example/CheckboxGroup",
  component: Group,
} as ComponentMeta<typeof Group>

const Template: ComponentStory<typeof Group> = (args) => <Group {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: [
    <Checkbox value="1">1</Checkbox>,
    <Checkbox value="2">2</Checkbox>,
    <Checkbox value="3">3</Checkbox>,
    <Checkbox value="4">4</Checkbox>,
    <Checkbox value="5">5</Checkbox>,
  ],
  value: ["1", "2", "3"],
}

export const Basic = () => {
  return (
    <>
      <Group value={["1", "2", "3"]}>
        <Checkbox value="1">1</Checkbox>
        <Checkbox value="2">2</Checkbox>
        <div>
          <Checkbox value="3">3</Checkbox>
        </div>
        <Checkbox value="4">4</Checkbox>
        <Checkbox value="5">5</Checkbox>
        <Checkbox checked>5</Checkbox>
      </Group>
    </>
  )
}

// export const defaultChecked = () => {
//   return (
//     <>
//       <Group defaultChecked />
//     </>
//   )
// }

// export const UnderControl = () => {
//   const [checked, setChecked] = useState(false)
//   return (
//     <>
//       <Group checked={checked}>Radio</Group>
//       <Button
//         onClick={() => {
//           setChecked(!checked)
//         }}
//       >
//         点击切换
//       </Button>
//     </>
//   )
// }

// export const NotUnderControl = () => {
//   return (
//     <>
//       <Radio>Radio</Radio>
//     </>
//   )
// }

// export const OnChange = () => {
//   return (
//     <>
//       <Radio
//         onChange={(e) => {
//           console.log("sedationh e", e)
//         }}
//       >
//         Radio
//       </Radio>
//     </>
//   )
// }
