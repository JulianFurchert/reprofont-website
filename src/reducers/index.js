import { combineReducers } from "redux";
import FontstylesReducer from "./fontstyles";
import ScrollPositionReducer from "./scrollPosition";

const rootReducer = combineReducers({
  fontstyles: FontstylesReducer,
  scrollPosition: ScrollPositionReducer
});

export default rootReducer;
