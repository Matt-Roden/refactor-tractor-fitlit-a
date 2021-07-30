class Hydration {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

  getHydrationDataByID(id) {
    this.hydrationData
      .filter((entry) => entry.id === id)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.users.filter((user) => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return (sum += drinker.addDailyOunces(date));
    }, 0);
    return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  }
}

export default Hydration;

// Need to return recent 7 days worth of hydration data
// Need to return any week of data
//
