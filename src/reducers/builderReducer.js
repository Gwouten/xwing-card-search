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
    case 'BUILDER_SET_PILOT':
    return {
      ...state,
      pilots: [...state.pilots, action.pilot]
    };


    case 'BUILDER_REMOVE_PILOT':
    return {
      ...state,
      pilots: [...state.pilots].splice(action.i, 1)
    };


    default:
    return state;
  }
}

export default builderReducer;
