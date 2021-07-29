const getData = (suffix) => {
  const baseURL = 'http://localhost:3001/api/v1/';
  const promise = fetch(`${baseURL}${suffix}`).then((response) =>
    response.json()
  );
  return promise;
};

export default getData;
