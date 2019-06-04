import { ADD_CREATURE, REMOVE_CREATURE, LOAD_CREATURES } from "./types";
import { getRandomInt } from "../utils/utilityFunctions";

export const addCreature = creature => {
  const uniqueKey = `creature${getRandomInt(99999)}-${Date.now()}`;
  // Set the key as a property of the creature object so we can use it as a reference later.
  creature.key = uniqueKey;
  return { type: ADD_CREATURE, creature };
};
export const removeCreature = creature => {
  return { type: REMOVE_CREATURE, creature };
};
export const loadCreatures = creatures => {
  return { type: LOAD_CREATURES, creatures };
};
