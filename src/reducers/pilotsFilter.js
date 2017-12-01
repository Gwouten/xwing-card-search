const pilotsFilterReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PILOTS_FILTERS':
    return [
      ...state,
      action.slot
    ];

    case 'CLEAR_PILOTS_FILTERS':
    return [];

    default:
    return state
  }
};

export default pilotsFilterReducer;
