import { combineReducers } from "redux";
import combatReducer from "./combat";
import statsReducer from "./stats";
import creatureReducer from "./creature";
import modalReducer from "./modal";

export default combineReducers({
  combat: combatReducer,
  stats: statsReducer,
  creatures: creatureReducer,
  modal: modalReducer
});
