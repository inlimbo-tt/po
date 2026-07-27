declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, unknown>)
    loadFromHTML(pages: NodeListOf<Element> | Element[]): void
    flipPrev(): void
    flipNext(): void
    destroy(): void
  }
}
