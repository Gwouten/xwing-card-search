const builderDefault = {
  name: "Squad name",
  faction: "",
  points: 100,
  description: "",
  obstacles: [],
  pilots: []
};

const builderReducer = (state = builderDefault, action) => {
  switch(action.type) {
    case 'BUILDER_SETUP_SQUAD':
    return {
      ...state,
      name: action.squadName,
      faction: action.squadFaction,
      points: action.squadPoints
    };


    case 'BUILDER_SET_PILOT':
    return {
      ...state,
      pilots: [...state.pilots, action.pilot]
    };


    case 'BUILDER_REMOVE_PILOT':
    state.pilots.splice(action.pilotIndex, 1)
    return {
      ...state,
      pilots: state.pilots
    };


    default:
    return state;
  }
}

export default builderReducer;
