const nameInitialState = {};
const input = (state = nameInitialState, action) => {
  switch (action.type) {
    case "getInput":
      return action.data;
    default:
      return state;
  }
};

export default input;
