import UserRepository from './UserRepository';

class Activity extends UserRepository {
  constructor(userData, id, activityData) {
    super(userData);
    this.id = id;
    this.activityData = activityData;
    this.userActivityData = this.activityData.filter(
      (aUser) => aUser.userID === id
    );
  }

  selectWeek(date) {
    let foundUser = this.userActivityData;
    let foundUserObj = foundUser.find((user) => user.date === date);
    let index = foundUser.indexOf(foundUserObj);
    if (index < 7) {
      return foundUser.slice(0, index + 1);
    } else {
      return foundUser.slice(index - 6, index + 1);
    }
  }

  calculateMiles(id, date, user) {
    let walkingUser = this.activityData.find(
      (data) => data.userID === id && data.date === date
    );
    return parseInt(
      Math.round((walkingUser.numSteps * user.strideLength) / 5280).toFixed(1)
    );
  }

  getActivityByDate(date, property) {
    return this.userActivityData.find((data) => data.date === date)
      [property];
  } //New

  compareStepGoal(date, id) {
    const steps = this.userActivityData.find((data) => data.date === date).numSteps;
    const stepGoal = this.getUser(id).dailyStepGoal;
    if(steps > stepGoal) {
      return true;
    } else {
      return false;
    }

  }

  findAllExceededStepGoalDays(id) {
    const stepGoal = this.getUser(id).dailyStepGoal
    return this.userActivityData
      .filter(
        (data) => data.numSteps > stepGoal
      )
      .map((data) => data.date);
  }

  calculateAverageSteps(date) {
    let allUsersStepsCount = this.users.map((user) => {
      return user.activityRecord.filter((activity) => {
        return activity.date === date;
      });
    });
    let sumOfSteps = allUsersStepsCount.reduce(
      (stepsSum, activityCollection) => {
        activityCollection.forEach((activity) => {
          stepsSum += activity.steps;
        });
        return stepsSum;
      },
      0
    );
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }

  calculateAverageStairs(date) {
    let allUsersStairsCount = this.users.map((user) => {
      return user.activityRecord.filter((activity) => {
        return activity.date === date;
      });
    });
    let sumOfStairs = allUsersStairsCount.reduce(
      (stairsSum, activityCollection) => {
        activityCollection.forEach((activity) => {
          stairsSum += activity.flightsOfStairs;
        });
        return stairsSum;
      },
      0
    );
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }

  getAverageMinutesActiveByWeek(date) {
    let days = this.selectWeek(date);
    return Math.round(
      days.reduce((accNum, val) => {
        return (accNum += val.minutesActive);
      }, 0) / 7
    );
  }
}
export default Activity;

// New

// calculateAverageStepGoal() {
//   let goals = this.users.map((user) => user.dailyStepGoal);
//
//   let total = goals.reduce((accSum, goal) => {
//     sum += goal;
//     return sum;
//   }, 0);
//
//   return total / this.users.length;
// }//New
