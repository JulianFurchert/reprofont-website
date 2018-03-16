import { combineReducers } from "redux";
import FontstylesReducer from "./fontstyles";
import SpeciemReducer from "./speciem";
import ScrollPositionReducer from "./scrollPosition";
import CardPositionReducer from "./cardPosition";


const rootReducer = combineReducers({
  fontstyles: FontstylesReducer,
  scrollPosition: ScrollPositionReducer,
  cardPosition: CardPositionReducer,
  speciem: SpeciemReducer
});

export default rootReducer;
