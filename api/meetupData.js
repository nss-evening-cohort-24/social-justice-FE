import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getMeetups = () => new Promise((resolve, reject) => {
  fetch("http://localhost:5042/meetups", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createMeetup = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/meetups.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleMeetup = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/meetups/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleMeetup = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/meetups/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMeetup = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/meetups/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getMeetupMembers = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/meetups.json?orderBy="team_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getMeetups,
  createMeetup,
  getSingleMeetup,
  deleteSingleMeetup,
  updateMeetup,
  getMeetupMembers,
};
