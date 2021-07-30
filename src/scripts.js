import './css/base.scss';
import './css/styles.scss';
import './updateDOM';
import getData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {
  displayUserData,
  displayHydrationData,
  displaySleepData,
  displayActivityData,
} from './updateDOM';

let todayDate = '2019/09/22';

// function to create random number for user
const getRandomID = () => Math.floor(Math.random() * 50) + 1;

let randomID = getRandomID();

getData('users')
  .then((data) => {
    let userRepository = new UserRepository(data.userData);
    let user = new User(userRepository.getUser(randomID));
  })
  .then(displayUserData);

getData('hydration')
  .then((data) => {
    let hydration = new Hydration(data.hydrationData);
  })
  .then(displayHydrationData);

getData('sleep')
  .then((data) => {
    let sleep = new Sleep(data.sleepData);
  })
  .then(displaySleepData);

getData('activity')
  .then((data) => {
    let activity = new Activity(data.activityData);
  })
  .then(displayActivityData);
