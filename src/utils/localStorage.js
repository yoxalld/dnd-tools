export function getSiteIdFromUrl() {
  // We use this to get the randomly generated site name from the url so we can rehydrate our data from Local Storage
  const pathToRegExp = require("path-to-regexp");
  const regExPattern = pathToRegExp("/combat-tracker/:siteId");
  const siteIdFromUrl = regExPattern.exec(window.location.pathname);
  // Return the second array value if it exists
  if (siteIdFromUrl !== null) {
    return siteIdFromUrl[1];
  } else {
    return undefined;
  }
}
export const loadState = siteId => {
  if (siteId !== undefined) {
    try {
      const serializedState = localStorage.getItem(siteId);
      if (serializedState === null) {
        return undefined;
      } else {
        return JSON.parse(serializedState);
      }
    } catch (err) {
      return undefined;
    }
  } else {
    return undefined;
  }
};

export const saveState = (siteId, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(siteId, serializedState);
  } catch (err) {
    console.log(err);
  }
};
