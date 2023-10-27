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
  fetch("http://localhost:5042/meetup", {
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

const getSingleMeetup = (id) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5042/meetups/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleMeetup = (id) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5042/meetups/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

//THE FETCH METHOD FOR UPDATE ON BE IS PUT
const updateMeetup = (id, payload) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5042/updateMeetup/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addMemberToMeetup = (meetupId, memberId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5042/meetup/${meetupId}/member/${memberId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeMemberFromMeetup = (meetupId, memberId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5042/meetup/${meetupId}/removemember/${memberId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});


// THIS ENDPOINT ISN'T NEEDED, THE BE ENDPOINT WILL RETURN A LIST OF MEMBERS WITH THE MEETUP
// const getMeetupMembers = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/meetups.json?orderBy="team_id"&equalTo="${firebaseKey}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         resolve(Object.values(data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch(reject);
// });

export {
  getMeetups,
  createMeetup,
  getSingleMeetup,
  deleteSingleMeetup,
  updateMeetup,
  // getMeetupMembers,
  addMemberToMeetup,
};
