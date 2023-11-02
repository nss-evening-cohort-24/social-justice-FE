# The Social Justice Project  
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

The Social Justice Project is an app intended as a platform for social change within the unhoused community. People around the world want to help the needy, but many of them don't know where to start. Our app helps with this by allowing users to create volunteer events, or Meetups, aimed at helping the unhoused community in a variety of ways. Additionally, users can add themselves to a Meetup, indicating they will be attending.


## Get Started
function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
    </div>
  );
}

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a person looking to get involved in helping the unhoused community.
- They have an interest in either creating a volunteering event or joining one as a volunteer.
- The problem this app solves for them is it allows them to get involved, informed, and excited about joining together to help the less fortunate.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new event is added an object should be created and that object should be pushed into an array of events that then prints to the DOM.
- The event details page contains the date and location of the Meetup, as well as a count of how many others will be volunteering, helping the organizer of the event keep track of who to expect.
- When a new member is added an object should be created and that object should be pushed into an array of members that then prints to the DOM.
- The member details page contains the contact information of the members so they can communicate leading up to the events.
- Users can be searched by name, email, and phone number making it easier for users to find contact info for those attending the same meetups.

## Video Walkthrough of the Social Justice Project
https://www.loom.com/share/d2ba529e0fdb449c8051dc8fa06e881e

## Wireframes
<img width="1148" alt="Your Alt" src="images/Social-Justice-WF.png">

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [ERD](https://dbdiagram.io/d/Social-Justice-ERD-65370c8cffbf5169f04cae7a)


## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [Johnny Saniat](https://github.com/JohnnySaniat)
- [Jasper Baltz](https://github.com/JJBaltz)
- [Cameron Dorris](https://github.com/SCDorr86)
- [Brandon Schnurbusch](https://github.com/B33blebroxx)
