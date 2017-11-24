const upgradesReducer = (state = [], action) => {
  switch(action.type) {

    case 'SET_UPGRADE_LIST':
    if(state.length === 0) {
      return [
        ...state,
        ...action.upgrades
      ];
    }

    default:
    return state;
  }
};

export default upgradesReducer;
