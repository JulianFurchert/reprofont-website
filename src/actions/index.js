export function selectLetter(index, letterIndex) {
  return {
    type: "LETTER_SELECTED",
    index,
    letterIndex
  };
}

export function saveScrollPosition(position) {
  return {
    type: "SCROLL_POSITION_SAVED",
    payload: position
  };
}
