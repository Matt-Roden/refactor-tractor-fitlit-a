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
  updateActivities(activity) {
    this.activityRecord.unshift(activity);
    if (activity.numSteps >= this.dailyStepGoal) {
      this.accomplishedDays.unshift(activity.date);
    }
  }
  findClimbingRecord() {
    return this.activityRecord.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })[0].flightsOfStairs;
  }
  calculateDailyCalories(date) {
    let totalMinutes = this.activityRecord
      .filter((activity) => {
        return activity.date === date;
      })
      .reduce((sumMinutes, activity) => {
        return (sumMinutes += activity.minutesActive);
      }, 0);
    return Math.round(totalMinutes * 7.6);
  }
  calculateAverageMinutesActiveThisWeek(todayDate) {
    return (
      this.activityRecord.reduce((sum, activity) => {
        let index = this.activityRecord.indexOf(
          this.activityRecord.find((activity) => activity.date === todayDate)
        );
        if (
          index <= this.activityRecord.indexOf(activity) &&
          this.activityRecord.indexOf(activity) <= index + 6
        ) {
          sum += activity.minutesActive;
        }
        return sum;
      }, 0) / 7
    ).toFixed(0);
  }
  calculateAverageStepsThisWeek(todayDate) {
    return (
      this.activityRecord.reduce((sum, activity) => {
        let index = this.activityRecord.indexOf(
          this.activityRecord.find((activity) => activity.date === todayDate)
        );
        if (
          index <= this.activityRecord.indexOf(activity) &&
          this.activityRecord.indexOf(activity) <= index + 6
        ) {
          sum += activity.steps;
        }
        return sum;
      }, 0) / 7
    ).toFixed(0);
  }
  calculateAverageFlightsThisWeek(todayDate) {
    return (
      this.activityRecord.reduce((sum, activity) => {
        let index = this.activityRecord.indexOf(
          this.activityRecord.find((activity) => activity.date === todayDate)
        );
        if (
          index <= this.activityRecord.indexOf(activity) &&
          this.activityRecord.indexOf(activity) <= index + 6
        ) {
          sum += activity.flightsOfStairs;
        }
        return sum;
      }, 0) / 7
    ).toFixed(1);
  }
  findTrendingStepDays() {
    let positiveDays = [];
    for (var i = 0; i < this.activityRecord.length; i++) {
      if (
        this.activityRecord[i + 1] &&
        this.activityRecord[i].steps > this.activityRecord[i + 1].steps
      ) {
        positiveDays.unshift(this.activityRecord[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStepDays.push(
          `Your most recent positive step streak was ${positiveDays[0]} - ${
            positiveDays[positiveDays.length - 1]
          }!`
        );
        positiveDays = [];
      }
    }
  }
  findTrendingStairsDays() {
    let positiveDays = [];
    for (var i = 0; i < this.activityRecord.length; i++) {
      if (
        this.activityRecord[i + 1] &&
        this.activityRecord[i].flightsOfStairs >
          this.activityRecord[i + 1].flightsOfStairs
      ) {
        positiveDays.unshift(this.activityRecord[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStairsDays.push(
          `Your most recent positive climbing streak was ${positiveDays[0]} - ${
            positiveDays[positiveDays.length - 1]
          }!`
        );
        positiveDays = [];
      }
    }
  }

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(
        this.activityRecord.find((activity) => activity.date === todayDate)
      );
      if (
        index <= this.activityRecord.indexOf(activity) &&
        this.activityRecord.indexOf(activity) <= index + 6
      ) {
        sum += activity.steps;
      }
      return sum;
    }, 0);
  }
  findFriendsTotalStepsForWeek(users, date) {
    this.friends.map((friend) => {
      let matchedFriend = users.find((user) => user.id === friend);
      matchedFriend.calculateTotalStepsThisWeek(date);
      this.friendsActivityRecords.push({
        id: matchedFriend.id,
        firstName: matchedFriend.name.toUpperCase().split(' ')[0],
        totalWeeklySteps: matchedFriend.totalStepsThisWeek,
      });
    });
    this.calculateTotalStepsThisWeek(date);
    this.friendsActivityRecords.push({
      id: this.id,
      firstName: 'YOU',
      totalWeeklySteps: this.totalStepsThisWeek,
    });
    this.friendsActivityRecords = this.friendsActivityRecords.sort(
      (a, b) => b.totalWeeklySteps - a.totalWeeklySteps
    );
  }
}

export default Activity;
