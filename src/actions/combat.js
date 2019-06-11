import {
  START_COMBAT,
  ADVANCE_TURN,
  END_COMBAT,
  UPDATE_ACTIVE_CREATURE
} from "./types";

export const startCombat = () => {
  return { type: START_COMBAT };
};
export const endCombat = () => {
  return { type: END_COMBAT };
};
export const advanceTurn = () => {
  return { type: ADVANCE_TURN };
};
export const updateActiveCreature = () => {
  return { type: UPDATE_ACTIVE_CREATURE };
};
