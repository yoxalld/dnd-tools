import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export const openModal = content => {
  return { type: OPEN_MODAL, content };
};
export const closeModal = content => {
  return { type: CLOSE_MODAL, content };
};
