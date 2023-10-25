import { deleteMember, getMembers, getSingleMember } from './memberData';
import { getSingleMeetup, deleteSingleMeetup, getMeetupMembers } from './meetupData';

const getMemberDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(firebaseKey).then((memberObj) => {
    getSingleMeetup(memberObj.meetup_id).then((meetupObject) => {
      resolve({ ...memberObj, meetupObject });
    });
  }).catch(reject);
});

const getMeetingDetails = async (firebaseKey) => {
  const meetup = await getSingleMeetup(firebaseKey);
  const members = await getMeetupMembers(meetup.firebaseKey);

  return { ...meetup, members };
};

const deleteMeetupMembersRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getMeetupMembers(firebaseKey).then((meetupsMemberArray) => {
    const deleteMemberPromises = meetupsMemberArray.map((member) => deleteMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleMeetup(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

const searchMembers = (searchValue, uid) => new Promise((resolve, reject) => {
  getMembers(uid).then((memberArray) => {
    const searchResults = memberArray.filter((member) => (
      member.firstName.toLowerCase().includes(searchValue)
      || member.lastName.toLowerCase().includes(searchValue)
      || member.email.toLowerCase().includes(searchValue)
      || member.phone.includes(searchValue)
      || member.memberSince.includes(searchValue)

    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getMemberDetails, getMeetingDetails, deleteMeetupMembersRelationship, searchMembers,
};
