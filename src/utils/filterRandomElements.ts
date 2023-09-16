export function filterRandomElements<T>(elements: T[]) {
  const filteredElements: T[] = [];

  for (const element of elements) {
    if (Math.random() > 0.5) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
}
