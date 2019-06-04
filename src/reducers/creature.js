import { ADD_CREATURE, LOAD_CREATURES } from "../actions/types";

const DEFAULT_CREATURE = {
  creatures: []
};

const creatureReducer = (state = DEFAULT_CREATURE, action) => {
  switch (action.type) {
    case ADD_CREATURE:
      let newCreatures = state.creatures.slice();
      // Add new creature
      newCreatures.splice(0, 0, action.creature);
      // Sort creatures based on initiative
      newCreatures.sort(function(a, b) {
        return b["initiative"] - a["initiative"];
      });
      return {
        ...state,
        creatures: newCreatures
      };
    case LOAD_CREATURES:
      let loadCreatures = state.creatures.slice();
      loadCreatures.splice(0, 0, ...action.creatures);
      return {
        ...state,
        creatures: loadCreatures
      };
    default:
      return state;
  }
};

export default creatureReducer;
