const getData = (suffix) => {
  const baseURL = 'http://localhost:3001/api/v1/';
  return fetch(`${baseURL}${suffix}`).then((response) => response.json());
};

const getAllData = () => {
  return Promise.all([
    getData('users'),
    getData('hydration'),
    getData('sleep'),
    getData('activity'),
  ]);
};
export default getAllData;
