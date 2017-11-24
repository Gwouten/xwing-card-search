const pilotsReducer = (state = [], action) => {
  switch(action.type) {

    case 'SET_PILOT_LIST':
    if(state.length === 0) {      
      return [
        ...state,
        ...action.pilots
      ];
    }

    default:
    return state;
  }
};

export default pilotsReducer;
