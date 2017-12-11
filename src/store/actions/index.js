const inputAction = input => ({
  type: "getInput",
  data: input
});

export const getData = input => dispatch => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  const requestBody = {
    text: input,

  }
  const config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestBody)
  }
  fetch("http://localhost:8080/", config)
  .then(res => {
    return res.text();
  })
  .then(data => {
    dispatch(inputAction(data))
  })
};
