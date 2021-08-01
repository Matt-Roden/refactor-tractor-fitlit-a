import UserRepository from './UserRepository';
import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {
  user,
  userRepository,
  hydration,
  sleep,
  activity,
  todayDate,
} from '.scripts.js';

// <<<<<<<<<<<<<<<<<<<<<<<< USER DATA DISPLAY >>>>>>>>>>>>>>>>>>>>>>>

const displayUserData = () => {
  user.getFirstName();
  userRepository.findFriendsNames(user.friends);

  let dropdownEmail = document.querySelector('#dropdown-email');
  let userInfoDropdown = document.querySelector('#user-info-dropdown');
  let dropdownGoal = document.querySelector('#dropdown-goal');
  let dropdownName = document.querySelector('#dropdown-name');
  let headerName = document.querySelector('#header-name');

  headerName.innerText = `${user.getFirstName()}'S `;
  dropdownEmail.innerText = `EMAIL | ${user.email}`;
  dropdownName.innerText = user.name.toUpperCase();
  dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
};

// <<<<<<<<<<<<<<<<<<<<<<<< HYDRATION DATA DISPLAY >>>>>>>>>>>>>>>>>>>>>>>

const displayHydrationData = () => {
  let dailyOz = document.querySelectorAll('.daily-oz');
  let hydrationCalendarCard = document.querySelector(
    '#hydration-calendar-card'
  );
  let hydrationFriendOuncesToday = document.querySelector(
    '#hydration-friend-ounces-today'
  );
  let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
  let hydrationInfoCard = document.querySelector('#hydration-info-card');
  let hydrationInfoGlassesToday = document.querySelector(
    '#hydration-info-glasses-today'
  );
  let hydrationMainCard = document.querySelector('#hydration-main-card');
  // let hydrationUserOuncesToday = document.querySelector(
  //   '#hydration-user-ounces-today'
  );
  document.querySelector(
    '#hydration-user-ounces-today'
  ).innerText = getUserOzByDate(date);

  hydrationFriendOuncesToday.innerText =
    userRepository.calculateAverageDailyWater(todayDate);

  hydrationInfoGlassesToday.innerText =
    hydrationData.find((hydration) => {
      return hydration.userID === user.id && hydration.date === todayDate;
    }).numOunces / 8;
};

// <<<<<<<<<<<<<<<<<<<<<<<< SLEEP DATA DISPLAY >>>>>>>>>>>>>>>>>>>>>>>

const displaySleepData = () => {
  let sleepCalendarCard = document.querySelector('#sleep-calendar-card');
  let sleepCalendarHoursAverageWeekly = document.querySelector(
    '#sleep-calendar-hours-average-weekly'
  );
  let sleepCalendarQualityAverageWeekly = document.querySelector(
    '#sleep-calendar-quality-average-weekly'
  );
  let sleepFriendLongestSleeper = document.querySelector(
    '#sleep-friend-longest-sleeper'
  );
  let sleepFriendsCard = document.querySelector('#sleep-friends-card');
  let sleepFriendWorstSleeper = document.querySelector(
    '#sleep-friend-worst-sleeper'
  );
  let sleepInfoCard = document.querySelector('#sleep-info-card');
  let sleepInfoHoursAverageAlltime = document.querySelector(
    '#sleep-info-hours-average-alltime'
  );
  let sleepInfoQualityAverageAlltime = document.querySelector(
    '#sleep-info-quality-average-alltime'
  );
  let sleepInfoQualityToday = document.querySelector(
    '#sleep-info-quality-today'
  );
  let sleepMainCard = document.querySelector('#sleep-main-card');
  let sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');

  sleepCalendarHoursAverageWeekly.innerText =
    user.calculateAverageHoursThisWeek(todayDate);

  sleepCalendarQualityAverageWeekly.innerText =
    user.calculateAverageQualityThisWeek(todayDate);

  sleepFriendLongestSleeper.innerText = userRepository.users
    .find((user) => {
      return user.id === userRepository.getLongestSleepers(todayDate);
    })
    .getFirstName();

  sleepFriendWorstSleeper.innerText = userRepository.users
    .find((user) => {
      return user.id === userRepository.getWorstSleepers(todayDate);
    })
    .getFirstName();

  sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;

  stepsInfoMilesWalkedToday.innerText = user.activityRecord
    .find((activity) => {
      return activity.date === todayDate && activity.userId === user.id;
    })
    .calculateMiles(userRepository);
};

// <<<<<<<<<<<<<<<<<<<<<<<< STAIR DATA DISPLAY >>>>>>>>>>>>>>>>>>>>>>>

const displayStairsData = () => {
  let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
  let stairsCalendarFlightsAverageWeekly = document.querySelector(
    '#stairs-calendar-flights-average-weekly'
  );
  let stairsCalendarStairsAverageWeekly = document.querySelector(
    '#stairs-calendar-stairs-average-weekly'
  );

  let stairsFriendFlightsAverageToday = document.querySelector(
    '#stairs-friend-flights-average-today'
  );
  let stairsFriendsCard = document.querySelector('#stairs-friends-card');
  let stairsInfoCard = document.querySelector('#stairs-info-card');
  let stairsInfoFlightsToday = document.querySelector(
    '#stairs-info-flights-today'
  );
  let stairsMainCard = document.querySelector('#stairs-main-card');
  let stairsTrendingButton = document.querySelector('.stairs-trending-button');
  let stairsTrendingCard = document.querySelector('#stairs-trending-card');
  let stairsUserStairsToday = document.querySelector(
    '#stairs-user-stairs-today'
  );
  stairsCalendarFlightsAverageWeekly.innerText =
    user.calculateAverageFlightsThisWeek(todayDate);

  stairsCalendarStairsAverageWeekly.innerText = (
    user.calculateAverageFlightsThisWeek(todayDate) * 12
  ).toFixed(0);

  stairsFriendFlightsAverageToday.innerText = (
    userRepository.calculateAverageStairs(todayDate) / 12
  ).toFixed(1);

  stairsInfoFlightsToday.innerText = activityData.find((activity) => {
    return activity.userID === user.id && activity.date === todayDate;
  }).flightsOfStairs;

  stairsUserStairsToday.innerText =
    activityData.find((activity) => {
      return activity.userID === user.id && activity.date === todayDate;
    }).flightsOfStairs * 12;

  stairsCalendarFlightsAverageWeekly.innerText =
    user.calculateAverageFlightsThisWeek(todayDate);

  stairsCalendarStairsAverageWeekly.innerText = (
    user.calculateAverageFlightsThisWeek(todayDate) * 12
  ).toFixed(0);

  stairsTrendingButton.addEventListener('click', function () {
    user.findTrendingStairsDays();
    trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
  });
};

// <<<<<<<<<<<<<<<<<<<<<<<< STEP DATA DISPLAY >>>>>>>>>>>>>>>>>>>>>>>

const displayStepData = () => {
  let stepsCalendarCard = document.querySelector('#steps-calendar-card');
  let stepsMainCard = document.querySelector('#steps-main-card');
  let stepsInfoCard = document.querySelector('#steps-info-card');
  let stepsFriendsCard = document.querySelector('#steps-friends-card');
  let stepsTrendingCard = document.querySelector('#steps-trending-card');
  let stepsCalendarTotalActiveMinutesWeekly = document.querySelector(
    '#steps-calendar-total-active-minutes-weekly'
  );
  let stepsCalendarTotalStepsWeekly = document.querySelector(
    '#steps-calendar-total-steps-weekly'
  );
  let stepsFriendAverageStepGoal = document.querySelector(
    '#steps-friend-average-step-goal'
  );
  let stepsInfoActiveMinutesToday = document.querySelector(
    '#steps-info-active-minutes-today'
  );
  let stepsInfoMilesWalkedToday = document.querySelector(
    '#steps-info-miles-walked-today'
  );
  let stepsFriendActiveMinutesAverageToday = document.querySelector(
    '#steps-friend-active-minutes-average-today'
  );
  let stepsFriendStepsAverageToday = document.querySelector(
    '#steps-friend-steps-average-today'
  );
  let dropdownFriendsStepsContainer = document.querySelector(
    '#dropdown-friends-steps-container'
  );
  let stepsTrendingButton = document.querySelector('.steps-trending-button');
  let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
  let trendingStepsPhraseContainer = document.querySelector(
    '.trending-steps-phrase-container'
  );
  let trendingStairsPhraseContainer = document.querySelector(
    '.trending-stairs-phrase-container'
  );
  let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');
  stepsCalendarTotalActiveMinutesWeekly.innerText =
    user.calculateAverageMinutesActiveThisWeek(todayDate);

  stepsCalendarTotalStepsWeekly.innerText =
    user.calculateAverageStepsThisWeek(todayDate);

  stepsTrendingButton.addEventListener('click', function () {
    user.findTrendingStepDays();
    trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
  });

  stepsFriendActiveMinutesAverageToday.innerText =
    userRepository.calculateAverageMinutesActive(todayDate);

  stepsFriendAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`;

  stepsFriendStepsAverageToday.innerText =
    userRepository.calculateAverageSteps(todayDate);

  stepsInfoActiveMinutesToday.innerText = activityData.find((activity) => {
    return activity.userID === user.id && activity.date === todayDate;
  }).minutesActive;

  stepsUserStepsToday.innerText = activityData.find((activity) => {
    return activity.userID === user.id && activity.date === todayDate;
  }).numSteps;

  user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

  user.friendsActivityRecords.forEach((friend) => {
    dropdownFriendsStepsContainer.innerHTML += `
  <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
  `;
  });

  friendsStepsParagraphs.forEach((paragraph) => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add('green-text');
    }
    if (
      friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph
    ) {
      paragraph.classList.add('red-text');
    }
    if (paragraph.innerText.includes('YOU')) {
      paragraph.classList.add('yellow-text');
    }
  });
};

// <<<<<<<<<<<<<<<<<I DON'T KNOW WHAT'S GOING ON WITH THESE YET>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<< EVENT LISTENERS >>>>>>>>>>>>>>>>>>>>>>>
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays());
stepsTrendingButton.addEventListener('click', updateTrendingStepDays());

function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}

function showInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
}

let mainPage = document.querySelector('main');
let profileButton = document.querySelector('#profile-button');
