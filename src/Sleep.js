class Sleep {
  constructor(sleepData, id) {
    this.sleepData = sleepData;
    this.userID = id;
    this.userSleepData = this.sleepData
      .filter((entry) => entry.userID === this.userID)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  calculateAverage(data, property) {
    return Math.round(
      data.reduce((sum, dataEntry) => {
        return (sum += dataEntry[property]);
      }, 0) / data.length
    );
  }

  getSleepByDate(date, property) {
    return this.userSleepData.find((userEntry) => userEntry.date === date)[
      property
    ];
  }

  getUserSleepByWeek(date, property, key) {
    const target = this.userSleepData.find(
      (userEntry) => userEntry.date === date
    );
    const index = this.userSleepData.indexOf(target);
    if (index < 7) {
      let dates = this.userSleepData
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let sleepValue = this.userSleepData
        .slice(0, index + 1)
        .map((userEntry) => userEntry[property]);
      return { date: dates, [key]: sleepValue };
    } else {
      let dates = this.userSleepData
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let sleepValue = this.userSleepData
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry[property]);
      return { date: dates, [key]: sleepValue };
    }
  }
}
export default Sleep;

// <<<<<<<<<<<<<<<<<<<<<< UNUSED FUNCTIONS >>>>>>>>>>>>>>>>>>>>>>>>>>

// findBestSleepers(date) {
//   return this.users.filter((user) => {
//     return user.calculateAverageQualityThisWeek(date) > 3;
//   });
// }

// getLongestSleepers(date) {
//   return sleepData
//     .filter((sleep) => {
//       return sleep.date === date;
//     })
//     .sort((a, b) => {
//       return b.hoursSlept - a.hoursSlept;
//     })[0].userID;
// }

// getWorstSleepers(date) {
//   return sleepData
//     .filter((sleep) => {
//       return sleep.date === date;
//     })
//     .sort((a, b) => {
//       return a.hoursSlept - b.hoursSlept;
//     })[0].userID;
// }
