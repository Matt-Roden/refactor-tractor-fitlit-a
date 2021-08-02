import './css/base.scss';
import './css/styles.scss';
import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import displayAllData from './updateDOM';
import getAllData from './apiCalls';
export { user, userRepository, hydration, sleep, activity };

let user, userRepository, hydration, sleep, activity;

// function to create random number for user
const getRandomID = () => Math.floor(Math.random() * 50) + 1;

let randomID = getRandomID();

// getData('users')
//   .then((data) => {
//     let userRepository = new UserRepository(data.userData);
//     let user = new User(userRepository.getUser(randomID));
//   })
//   .then(displayUserData);

// getData('hydration')
//   .then((data) => {
//     let hydration = new Hydration(data.hydrationData);
//   })
//   .then(displayHydrationData);

// getData('sleep')
//   .then((data) => {
//     let sleep = new Sleep(data.sleepData);
//   })
//   .then(displaySleepData);

// getData('activity')
//   .then((data) => {
//     let activity = new Activity(data.activityData);
//   })
//   .then(displayActivityData);

getAllData()
  .then((data) => {
    userRepository = new UserRepository(data[0].userData);
    user = new User(userRepository.getUser(randomID));
    hydration = new Hydration(data[1].hydrationData);
    sleep = new Sleep(data[2].sleepData);
    activity = new Activity(
      userRepository.users,
      randomID,
      data[3].activityData
    );
  })
  .then(displayAllData);
