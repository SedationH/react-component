import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Radio from "./Radio"
import RadioGroup from "./Group"

import "./index.less"
import "../button/index.less"

export default {
  title: "Example/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: [
    <Radio value="1">1</Radio>,
    <Radio value="2">2</Radio>,
    <Radio value="3">3</Radio>,
    <Radio value="4">4</Radio>,
  ],
  defaultValue: "2",
  disabled: true,
}

export const NotUnderControl = () => {
  return (
    <RadioGroup>
      <Radio value="1">1</Radio>
      <Radio value="2">2</Radio>
      <Radio value="3">3</Radio>
      <Radio value="4">4</Radio>
    </RadioGroup>
  )
}

export const UnderControl = () => {
  const [value, setValue] = useState("0")

  return (
    <div>
      {JSON.stringify({ value })}
      <RadioGroup value={value}>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
        <Radio value="4">4</Radio>
      </RadioGroup>
      <Button onClick={() => setValue(String((Number(value) + 1) % 5))}>加</Button>
    </div>
  )
}

export const OnChange = () => {
  return (
    <RadioGroup
      onChange={(e) => {
        console.log("sedationh e", e)
      }}
    >
      <Radio value="1">1</Radio>
      <Radio value="2">2</Radio>
      <Radio value="3">3</Radio>
      <Radio value="4">4</Radio>
    </RadioGroup>
  )
}

export const OnChangeUnderControl = () => {
  return (
    <RadioGroup
      onChange={(e) => {
        console.log("sedationh e", e)
      }}
      value="2"
    >
      <Radio value="1">1</Radio>
      <Radio value="2">2</Radio>
      <Radio value="3">3</Radio>
      <Radio value="4">4</Radio>
    </RadioGroup>
  )
}
