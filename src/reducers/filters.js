const filtersDefault = {
  text: '',
  faction: 'any',
  cardTypePilot: true,
  cardTypeUpgrade: true,
  minPoints: -3,
  maxPoints: 100
};

const filtersReducer = (state = filtersDefault, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTERS':
    return {
      ...state,
      text: action.text
    }

    default:
    return state;
  }
};

export default filtersReducer;
