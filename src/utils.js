export class Utility {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.userData = this.data
      .filter((entry) => entry.id === id)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }

  getUserDataByWeek(date, key, property) {
    const target = this.data.find((userEntry) => userEntry.date === date);
    const index = this.data.indexOf(target);
    if (index < 7) {
      let dates = this.data
        .slice(0, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.data
        .slice(0, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    } else {
      let dates = this.data
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.date);
      let numOunces = this.data
        .slice(index - 6, index + 1)
        .map((userEntry) => userEntry.numOunces);
      return { date: dates, ounces: numOunces };
    }
  }
}

getUserSleepByWeek(date, property, key) {
  const target = this.userSleep.find((userEntry) => userEntry.date === date);
  const index = this.userSleep.indexOf(target);
  if (index < 7) {
    let dates = this.userSleep
      .slice(0, index + 1)
      .map((userEntry) => userEntry.date);
    let sleepValue = this.userSleep
      .slice(0, index + 1)
      .map((userEntry) => userEntry[property]);
    return { date: dates, [key]: sleepValue };
  } else {
    let dates = this.userSleep
      .slice(index - 6, index + 1)
      .map((userEntry) => userEntry.date);
    let sleepValue = this.userSleep
      .slice(index - 6, index + 1)
      .map((userEntry) => userEntry[property]);
    return { date: dates, [key]: sleepValue };
  }
}