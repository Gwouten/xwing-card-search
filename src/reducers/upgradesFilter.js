const upgradesFilterReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_UPGRADES_FILTERS':
    return [
      ...state,
      action.slot
    ];

    case 'CLEAR_UPGRADES_FILTERS':
    return [];

    default:
    return state
  }
};

export default upgradesFilterReducer;
