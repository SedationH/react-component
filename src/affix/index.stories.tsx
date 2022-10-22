import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../button"
import Affix from "./Affix"

import "./index.less"

export default {
  title: "Example/Affix",
  component: Affix,
} as ComponentMeta<typeof Affix>

const Template: ComponentStory<typeof Affix> = (args) => <Affix {...args} />

export const Unit = Template.bind({})
Unit.args = {
  children: "Affix",
}

export const 变化的宽度 = () => {
  const [cnt, setCnt] = useState(3)
  return (
    <div style={{ height: "200vh" }}>
      <div style={{ height: "30vh", background: "pink" }}></div>
      <div>0</div>
      <Affix offsetTop={20}>
        <div
          style={{
            display: "flex",
          }}
        >
          {Array.from({ length: cnt }).map((_, i) => (
            <div
              style={{
                background: "green",
              }}
            >
              {i}
            </div>
          ))}
        </div>
      </Affix>
      <Button onClick={() => setCnt(cnt + 1)}>增加</Button>
      <div>3</div>
    </div>
  )
}

export const 变化的高度 = () => {
  const [cnt, setCnt] = useState(3)
  return (
    <div style={{ height: "200vh" }}>
      <div style={{ height: "30vh", background: "pink" }}></div>
      <div>0</div>
      <Affix offsetTop={20}>
        <div
          style={{
            background: "green",
            width: 40,
          }}
        >
          {Array.from({ length: cnt }).map((_, i) => (
            <div>{i}</div>
          ))}
        </div>
      </Affix>
      <Button onClick={() => setCnt(cnt + 1)}>增加</Button>
      <div>3</div>
    </div>
  )
}
