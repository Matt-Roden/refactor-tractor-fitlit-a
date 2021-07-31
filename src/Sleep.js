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

  updateSleep(date, hours, quality) {
    this.sleepHoursRecord.unshift({
      date: date,
      hours: hours,
    });
    this.sleepQualityRecord.unshift({
      date: date,
      quality: quality,
    });
    if (this.sleepHoursRecord.length) {
      this.hoursSleptAverage = (
        (hours + this.hoursSleptAverage * (this.sleepHoursRecord.length - 1)) /
        this.sleepHoursRecord.length
      ).toFixed(1);
    } else {
      this.hoursSleptAverage = hours;
    }
    if (this.sleepQualityRecord.length) {
      this.sleepQualityAverage = (
        (quality +
          this.sleepQualityAverage * (this.sleepQualityRecord.length - 1)) /
        this.sleepQualityRecord.length
      ).toFixed(1);
    } else {
      this.sleepQualityAverage = quality;
    }
  }
  calculateAverageHoursThisWeek(todayDate) {
    return (
      this.sleepHoursRecord.reduce((sum, sleepAct) => {
        let index = this.sleepHoursRecord.indexOf(
          this.sleepHoursRecord.find((sleep) => sleep.date === todayDate)
        );
        if (
          index <= this.sleepHoursRecord.indexOf(sleepAct) &&
          this.sleepHoursRecord.indexOf(sleepAct) <= index + 6
        ) {
          sum += sleepAct.hours;
        }
        return sum;
      }, 0) / 7
    ).toFixed(1);
  }
  calculateAverageQualityThisWeek(todayDate) {
    return (
      this.sleepQualityRecord.reduce((sum, sleepAct) => {
        let index = this.sleepQualityRecord.indexOf(
          this.sleepQualityRecord.find((sleep) => sleep.date === todayDate)
        );
        if (
          index <= this.sleepQualityRecord.indexOf(sleepAct) &&
          this.sleepQualityRecord.indexOf(sleepAct) <= index + 6
        ) {
          sum += sleepAct.quality;
        }
        return sum;
      }, 0) / 7
    ).toFixed(1);
  }
}
export default Sleep;
