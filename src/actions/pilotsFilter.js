export const setPilotsFilter = (slot) => {
  return ({
    type: 'SET_PILOTS_FILTERS',
    slot
  })
};

export const clearPilotsFilter = () => ({
    type: 'CLEAR_PILOTS_FILTERS',
});
