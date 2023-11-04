const dbUrl = 'http://localhost:5042';

const getOrg = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/organizations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getOrg;
