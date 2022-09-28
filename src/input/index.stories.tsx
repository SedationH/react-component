import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Input from "./index"
import ReactJson from "react-json-view"

import "./index.less"
import "../button/index.less"

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: "Input",
}

export const 受控 = () => {
  const [v, setV] = useState("")
  console.log("sedationh", { v })
  return (
    <>
      <Input value={v}>Input</Input>
      <Button type="primary" onClick={() => setV(v + "1")}>
        add 1 string
      </Button>
    </>
  )
}

export const 不受控 = () => {
  const [v, setV] = useState("")
  return (
    <>
      <Input
        onChange={(e) => {
          setV(e.target.value)
        }}
      >
        Input
      </Input>
      <ReactJson src={{ v }} />
    </>
  )
}
