const inputAction = input => ({
  type: "getInput",
  data: input
});

export const getData = input => dispatch => {
  dispatch(inputAction(input));
};
