class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getSleepDataByID(id) {
    this.sleepData
      .filter((entry) => entry.id === id)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  calculateAverageSleepQuality() {
    let totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }

  findBestSleepers(date) {
    return this.users.filter((user) => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    });
  }
  getLongestSleepers(date) {
    return sleepData
      .filter((sleep) => {
        return sleep.date === date;
      })
      .sort((a, b) => {
        return b.hoursSlept - a.hoursSlept;
      })[0].userID;
  }
  getWorstSleepers(date) {
    return sleepData
      .filter((sleep) => {
        return sleep.date === date;
      })
      .sort((a, b) => {
        return a.hoursSlept - b.hoursSlept;
      })[0].userID;
  }
}
export default Sleep;
