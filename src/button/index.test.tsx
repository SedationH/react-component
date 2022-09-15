import { render, screen, fireEvent } from "@testing-library/react"
import Button from "./index"
import { describe, test, it, expect, vi } from "vitest"

describe("Button", () => {
  test("renders Button text child", () => {
    render(<Button>click me</Button>)
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })

  test("renders normal Button default case size type", () => {
    const { container } = render(<Button>click me</Button>)

    expect(container.querySelector(".ant-btn-default")).toBeInTheDocument()
    expect(container.querySelector(".ant-btn-middle")).toBeInTheDocument()
  })

  test("renders primary Button", () => {
    const { container } = render(<Button type="primary">click me</Button>)

    expect(container.querySelector(".ant-btn-primary")).toBeInTheDocument()
  })

  test("renders small Button", () => {
    const { container } = render(<Button size="small">click me</Button>)

    expect(container.querySelector(".ant-btn-small")).toBeInTheDocument()
  })

  test("should support click", () => {
    const onClick = vi.fn()
    render(
      <Button type="primary" onClick={onClick}>
        click me
      </Button>
    )

    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)

    expect(onClick).toBeCalled()
  })

  test("should support blur", () => {
    const onBlur = vi.fn()
    render(
      <Button type="primary" onBlur={onBlur}>
        click me
      </Button>
    )

    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)
    fireEvent.blur(linkElement)

    expect(onBlur).toBeCalled()
  })
})
