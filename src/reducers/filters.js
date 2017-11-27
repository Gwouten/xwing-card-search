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

    case 'SET_CARD_TYPE_PILOTS_FILTERS':
    return {
      ...state,
      cardTypePilot: action.cardTypePilot
    }

    case 'SET_CARD_TYPE_UPGRADE_FILTERS':
    return {
      ...state,
      cardTypeUpgrade: action.cardTypeUpgrade
    }

    default:
    return state;
  }
};

export default filtersReducer;
