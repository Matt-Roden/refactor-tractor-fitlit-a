class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  calculateMiles(userRepository) {
    let walkingUser = userRepository.users.find((user) => {
      return user.id === this.userId;
    });
    return Math.round((this.steps * walkingUser.strideLength) / 5280).toFixed(
      1
    );
  }

  compareStepGoal(userRepository) {
    let userStepGoal = userRepository.users.find((user) => {
      return user.id === this.userId;
    }).dailyStepGoal;
    this.reachedStepGoal = this.steps >= userStepGoal;
  }

  calculateAverageStepGoal() {
    let goals = this.users.map(function (user) {
      return user.dailyStepGoal;
    });
    let total = goals.reduce(function (sum, goal) {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
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

  calculateAverageMinutesActive(date) {
    let allUsersMinutesActiveCount = this.users.map((user) => {
      return user.activityRecord.filter((activity) => {
        return activity.date === date;
      });
    });
    let sumOfMinutesActive = allUsersMinutesActiveCount.reduce(
      (minutesActiveSum, activityCollection) => {
        activityCollection.forEach((activity) => {
          minutesActiveSum += activity.minutesActive;
        });
        return minutesActiveSum;
      },
      0
    );
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }
}

export default Activity;
