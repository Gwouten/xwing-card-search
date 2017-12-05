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
    default:
    return state;
  }
}

export default builderReducer;
