const appDefault = {
  filterMenuHidden: false
};

const metaReducer = (state = appDefault, action) => {
  switch (action.type) {

    case 'TOGGLE_FILTER_MENU':
    return {
      ...state,
      filterMenuHidden: !state.filterMenuHidden
    }

    default:
    return state;
  }
};

export default metaReducer;
