class Utility {
  constructor() {}

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
