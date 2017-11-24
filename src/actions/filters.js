export const setTextFilters = (text) => ({
  type: 'SET_TEXT_FILTERS',
  text
});

export const setFactionFilters = (faction) => ({
  type: 'SET_FACTION_FILTERS',
  faction
});

export const setcardTypePilotFilters = (cardTypePilot) => ({
  type: 'SET_CARD_TYPE_PILOTS_FILTERS',
  cardTypePilot
});

export const setcardTypeUpgradeFilters = (cardTypeUpgrade) => ({
  type: 'SET_CARD_TYPE_UPGRADE_FILTERS',
  cardTypeUpgrade
});

export const setMinPointsFilters = (minPoints) => ({
  type: 'SET_MIN_POINTS_FILTERS',
  minPoints
});

export const setMaxPointsFilters = (maxPoints) => ({
  type: 'SET_MAX_POINTS_FILTERS',
  maxPoints
});

export const startSetFilters = (filters) => (dispatch) => dispatch(setFilters(filters));
