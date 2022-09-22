import { render, screen, fireEvent } from "@testing-library/react"
import Radio from "./Radio"

describe("Radio", () => {
  test("should renders Radio correctly", () => {
    render(<Radio>Test</Radio>)
    const linkElement = screen.getByText(/Test/i)
    expect(linkElement).toBeInTheDocument()
  })
})
