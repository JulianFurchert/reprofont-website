import { combineReducers } from "redux";
import FontstylesReducer from "./fontstyles";
import SpeciemReducer from "./speciem";
import ScrollPositionReducer from "./scrollPosition";

const rootReducer = combineReducers({
  fontstyles: FontstylesReducer,
  scrollPosition: ScrollPositionReducer,
  speciem: SpeciemReducer
});

export default rootReducer;
