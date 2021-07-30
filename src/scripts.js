import './css/base.scss';
import './css/styles.scss';
import './updateDOM';
import getData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import updateUser from './updateDOM';

let userID;
let todayDate = '2019/09/22';
let randomIndex = Math.floor(Math.round() * 50);

// function to create random number for user
const getRandomID = () => Math.floor(Math.random() * 50) + 1;

userID = getRandomID();

getData('users')
  .then((data) => {
    let userRepository = new UserRepository(data.userData);
    let user = new User(userRepository.getUser(userID));
  })
  .then(updateUser);

getData('hydration').then((data) => {
  let hydration = new Hydration(data.hydrationData);
});

getData('sleep').then((data) => {
  let sleep = new Sleep(data.sleepData);
});

getData('activity').then((data) => {
  let activity = new Activity(data.activityData);
});
