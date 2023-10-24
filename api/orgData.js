import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getOrg = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/org.json`, {
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
