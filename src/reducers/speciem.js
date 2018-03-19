const defaultState = {
  activePage: 0
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case "PAGE_SELECTED":
      return Object.assign({}, state, { activePage: action.payload })
    default:
      return state;
  }
}
