const filtersDefault = {
  text: '',
  faction: 'any',
  cardTypePilot: true,
  cardTypeUpgrade: true,
  minPoints: -3,
  maxPoints: 100,
  sortMethod: 'sortAZ'
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

    case 'SET_FACTION_FILTERS':
    return {
      ...state,
      faction: action.faction
    }

    case 'SET_MIN_POINTS_FILTERS':
    return {
      ...state,
      minPoints: action.minPoints
    }

    case 'SET_MAX_POINTS_FILTERS':
    return {
      ...state,
      maxPoints: action.maxPoints
    }

    case 'SET_SORT_METHOD':
    return {
      ...state,
      sortMethod: action.sortMethod
    }

    default:
    return state;
  }
};

export default filtersReducer;
