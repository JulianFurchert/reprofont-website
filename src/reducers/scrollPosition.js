export default function(state = 0, action) {
  switch (action.type) {
    case "SCROLL_POSITION_SAVED":
        return action.payload;
    default:
      return state;
  }
}
