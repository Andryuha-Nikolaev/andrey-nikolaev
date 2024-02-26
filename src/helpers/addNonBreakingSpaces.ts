export const addNonBreakingSpaces = ({
  text,
  length,
}: {
  text: string
  length: number
}) => {
  return text
    .split(/\s+/)
    .map((word, index, array) => [
      word,
      index < array.length - 1 && word.length <= length ? "\u00A0" : " ",
    ])
    .flat()
}
