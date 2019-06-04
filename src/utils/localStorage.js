export const loadState = siteId => {
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
};

export const saveState = (siteId, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(siteId, serializedState);
  } catch (err) {
    console.log(err);
  }
};
