export const setUpgradesFilter = (slot) => {
  return ({
    type: 'SET_UPGRADES_FILTERS',
    slot
  })
};

export const clearUpgradesFilter = () => ({
    type: 'CLEAR_UPGRADES_FILTERS',
});
