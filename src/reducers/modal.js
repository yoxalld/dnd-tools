import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const DEFAULT_MODAL = {
  modalOpen: false,
  modalContent: ""
};

const modalReducer = (state = DEFAULT_MODAL, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalContent: action.content
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalContent: ""
      };
    default:
      return state;
  }
};

export default modalReducer;
