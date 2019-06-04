import { SET_SITE_ID } from "../actions/types";

const DEFAULT_STATS = {
  siteId: ""
};

const modalReducer = (state = DEFAULT_STATS, action) => {
  switch (action.type) {
    case SET_SITE_ID:
      return {
        ...state,
        siteId: action.siteId
      };
    default:
      return state;
  }
};

export default modalReducer;
