import { SET_SITE_ID } from "./types";

export const setSiteId = siteId => {
  return { type: SET_SITE_ID, siteId };
};
