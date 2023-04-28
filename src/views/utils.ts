export function _verifyNotNull<T>(p: null | T): T {
  if (p === null) {
    throw "Should not be null!";
  }
  return p;
}

export function _createElement<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  classes?: string[]
): HTMLElementTagNameMap[T] {
  const element = document.createElement(tag);
  if (classes) {
    element.classList.add(...classes);
  }
  return element;
}

export function ignoreEnterCallback(keyEvent: KeyboardEvent) {
  if (keyEvent.key === "Enter") {
    keyEvent.preventDefault();
  }
}
