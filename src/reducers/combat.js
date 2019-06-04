import {
  START_COMBAT,
  PAUSE_COMBAT,
  ADVANCE_TURN,
  END_COMBAT
} from "../actions/types";
const DEFAULT_COMBAT = {
  combatStarted: false,
  combatPaused: false,
  turnCount: 0,
  roundCount: 0
};

const combatReducer = (state = DEFAULT_COMBAT, action) => {
  switch (action.type) {
    case START_COMBAT:
      return {
        ...state,
        turnCount: 1,
        combatStarted: true
      };
    case END_COMBAT:
      return {
        ...state,
        turnCount: 0,
        combatStarted: false
      };
    case PAUSE_COMBAT:
      return {
        ...state,
        combatPause: action.combatPaused
      };
    case ADVANCE_TURN:
      const newTurn = state.turnCount + 1;
      // Need to add Round logic once creatures are available in state
      return {
        ...state,
        turnCount: newTurn
      };
    default:
      return state;
  }
};

export default combatReducer;
