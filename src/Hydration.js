class Hydration {
  constructor(hydrationData, id) {
    this.hydrationData = hydrationData;
    this.userHydrationData = this.hydrationData
      .filter((entry) => entry.id === id)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  getUserAvgOz() {
    return Math.round(
      this.hydrationData.reduce((totalOunces, userEntry) => {
        return (totalOunces += userEntry.numOunces);
      }, 0) / this.userHydration.length
    );
  }

  getUserOzByDate(date) {
    return this.userHydration.find((userEntry) => userEntry.date === date)
      .numOunces;
  }

  getUserOzByWeek(date) {
    const target = this.userHydration.find(
      (userEntry) => userEntry.date === date
    );
    const index = this.userHydration.indexOf(target);
    if (index < 7) {
      let dates = this.userHydration
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.userHydration
        .slice(0, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    } else {
      let dates = this.userHydration
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.userHydration
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    }
  }
}

export default Hydration;

// Need to return recent 7 days worth of hydration data
// Need to return any week of data

// **********************UNUSED FUNCTIONS********************************

// getHydrationDataByID(id) {
//   this.hydrationData
//     .filter((entry) => entry.id === id)
//     .sort((a, b) => (a.date > b.date ? 1 : -1));
// }

// calculateAverageDailyWater(date) {
//   let todaysDrinkers = this.users.filter((user) => {
//     return user.addDailyOunces(date) > 0;
//   });
//   let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
//     return (sum += drinker.addDailyOunces(date));
//   }, 0);
//   return Math.floor(sumDrankOnDate / todaysDrinkers.length);
// }
// updateHydration(date, amount) {
//   this.ouncesRecord.unshift({ [date]: amount });
//   if (this.ouncesRecord.length) {
//     this.ouncesAverage = Math.round(
//       (amount + this.ouncesAverage * (this.ouncesRecord.length - 1)) /
//         this.ouncesRecord.length
//     );
//   } else {
//     this.ouncesAverage = amount;
//   }
// }
// addDailyOunces(date) {
//   return this.ouncesRecord.reduce((sum, record) => {
//     let amount = record[date];
//     if (amount) {
//       sum += amount;
//     }
//     return sum;
//   }, 0);
// }
