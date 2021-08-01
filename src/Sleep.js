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

// **********************UNUSED FUNCTIONS********************************
// updateSleep(date, hours, quality) {
//   this.sleepHoursRecord.unshift({
//     date: date,
//     hours: hours,
//   });
//   this.sleepQualityRecord.unshift({
//     date: date,
//     quality: quality,
//   });
//   if (this.sleepHoursRecord.length) {
//     this.hoursSleptAverage = (
//       (hours + this.hoursSleptAverage * (this.sleepHoursRecord.length - 1)) /
//       this.sleepHoursRecord.length
//     ).toFixed(1);
//   } else {
//     this.hoursSleptAverage = hours;
//   }
//   if (this.sleepQualityRecord.length) {
//     this.sleepQualityAverage = (
//       (quality +
//         this.sleepQualityAverage * (this.sleepQualityRecord.length - 1)) /
//       this.sleepQualityRecord.length
//     ).toFixed(1);
//   } else {
//     this.sleepQualityAverage = quality;
//   }
// }

// calculateAverageHoursThisWeek(todayDate) {
//   return (
//     this.sleepHoursRecord.reduce((sum, sleepAct) => {
//       let index = this.sleepHoursRecord.indexOf(
//         this.sleepHoursRecord.find((sleep) => sleep.date === todayDate)
//       );
//       if (
//         index <= this.sleepHoursRecord.indexOf(sleepAct) &&
//         this.sleepHoursRecord.indexOf(sleepAct) <= index + 6
//       ) {
//         sum += sleepAct.hours;
//       }
//       return sum;
//     }, 0) / 7
//   ).toFixed(1);
// }
// calculateAverageQualityThisWeek(todayDate) {
//   return (
//     this.sleepQualityRecord.reduce((sum, sleepAct) => {
//       let index = this.sleepQualityRecord.indexOf(
//         this.sleepQualityRecord.find((sleep) => sleep.date === todayDate)
//       );
//       if (
//         index <= this.sleepQualityRecord.indexOf(sleepAct) &&
//         this.sleepQualityRecord.indexOf(sleepAct) <= index + 6
//       ) {
//         sum += sleepAct.quality;
//       }
//       return sum;
//     }, 0) / 7
//   ).toFixed(1);
// }
// }

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
