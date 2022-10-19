export type BindElement = HTMLElement | Window | null | undefined

export function getTargetRect(target: BindElement): DOMRect {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, bottom: window.innerHeight } as DOMRect)
}
