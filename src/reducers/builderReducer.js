const builderDefault = {
  name: "Squad name",
  faction: "",
  points: 100,
  description: "",
  obstacles: [],
  pilots: [],
  pointsUsed: []
};

const builderReducer = (state = builderDefault, action) => {
  switch(action.type) {


    case 'BUILDER_RESET_SQUAD':
    return builderDefault;


    case 'BUILDER_RESET_PILOTS':
    return {
      ...state,
      pilots: [],
      pointsUsed: []
    };


    case 'BUILDER_SETUP_SQUAD':
    return {
      ...state,
      name: action.squadName,
      faction: action.squadFaction,
      points: action.squadPoints
    };


    case 'BUILDER_SET_PILOT':
    const pilots = [...state.pilots, action.pilot];
    const pointsUsed = pilots.map((pilot) => {
      return pilot.points;
    });
    return {
      ...state,
      pilots,
      pointsUsed
    };


    case 'BUILDER_REMOVE_PILOT':
    state.pilots.splice(action.pilotIndex, 1);
    state.pointsUsed.splice(action.pilotIndex, 1);
    return {
      ...state,
      pilots: state.pilots,
      pointsUsed: state.pointsUsed
    };


    default:
    return state;
  }
}

export default builderReducer;
