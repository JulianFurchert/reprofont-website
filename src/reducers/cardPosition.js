export default function(state = {}, action) {
  switch (action.type) {
    case "CARD_POSITION_SAVED":
        return action.payload;
    default:
      return state;
  }
}
