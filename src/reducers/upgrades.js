const upgradesReducer = (state = [], action) => {
  switch(action.type) {

    case 'SET_UPGRADE_LIST':
    return [
      ...state,
      ...action.upgrades
    ];

    default:
    return state;
  }
};

export default upgradesReducer;
