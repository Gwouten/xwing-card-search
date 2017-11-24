export const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  filters
});

export const startSetFilters = (filters) => (dispatch) => dispatch(setFilters(filters));
