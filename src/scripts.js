import './css/base.scss';
import './css/styles.scss';
import './updateDOM';
import getData from './apiCalls';
import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';

// let userData = [];
let activityData = [];
let hydrationData = [];
let sleepData = [];
let user;

getData('users').then((data) => {
  let userRepository = new UserRepository(data.userData);
});

getData('hydration').then((data) => {
  let hydration = new Hydration(data.hydrationData);
});

getData('sleep').then((data) => {
  let sleep = new Sleep(data.sleepData);
});

getData('activity').then((data) => {
  let activity = new Activity(data.activityData);
});

userRepository.users.forEach((user) => {
  user = new User(user);
  userRepository.users.push(user);
});

activityData.forEach((activity) => {
  activity = new Activity(activity, userRepository);
});

hydrationData.forEach((hydration) => {
  hydration = new Hydration(hydration, userRepository);
});

sleepData.forEach((sleep) => {
  sleep = new Sleep(sleep, userRepository);
});

// user = userRepository.users[0];
