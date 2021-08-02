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

getAllData()
  .then((data) => {
    userRepository = new UserRepository(data[0].userData);
    user = new User(userRepository.getUser(randomID));
    hydration = new Hydration(data[1].hydrationData, randomID);
    sleep = new Sleep(data[2].sleepData, randomID);
    activity = new Activity(
      userRepository.users,
      randomID,
      data[3].activityData
    );
  })
  .then(displayAllData);
