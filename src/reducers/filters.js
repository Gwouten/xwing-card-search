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
    default:
    return state;
  }
};

export default filtersReducer;
