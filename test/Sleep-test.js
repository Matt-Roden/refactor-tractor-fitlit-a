import { expect } from 'chai';

import Sleep from '../src/Sleep';
import sleepData from '../src/data/sleep';
import singleUserSleepData from '../src/data/single-user-sleep-test-data';

describe('Sleep', () => {
  let sleep, userID;

  beforeEach(() => {
    userID = 1;
    sleep = new Sleep(sleepData, userID);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it("should hold all user's sleep data", () => {
    expect(sleep.sleepData).to.deep.equal(sleepData);
  });

  it("should hold a single user's data", () => {
    expect(sleep.userSleepData).to.deep.equal(singleUserSleepData);
  });

  it('should be able to calculate average hours slept for a user', () => {
    expect(sleep.calculateAverage(sleep.userSleepData, 'hoursSlept')).to.equal(
      8
    );
  });

  it('should be able to calculate average quality of sleep for a user', () => {
    expect(
      sleep.calculateAverage(sleep.userSleepData, 'sleepQuality')
    ).to.equal(3);
  });

  it("should be able to get a user's sleep quality by date", () => {
    expect(sleep.getSleepByDate('2019/07/16', 'sleepQuality')).to.equal(4.9);
  });

  it("should be able to get a user's hours slept by date", () => {
    expect(sleep.getSleepByDate('2019/07/01', 'hoursSlept')).to.equal(4.8);
  });

  it("should be able to get a user's sleep quality for any week", () => {
    expect(
      sleep.getUserSleepByWeek('2019/08/12', 'sleepQuality', 'quality')
    ).to.deep.equal({
      date: [
        '2019/08/06',
        '2019/08/07',
        '2019/08/08',
        '2019/08/09',
        '2019/08/10',
        '2019/08/11',
        '2019/08/12',
      ],
      quality: [2.3, 4.1, 3.4, 4.3, 2.1, 4.5, 1],
    });
  });

  it("should be able to get a user's hours slept for any week", () => {
    expect(
      sleep.getUserSleepByWeek('2019/08/12', 'hoursSlept', 'hours')
    ).to.deep.equal({
      date: [
        '2019/08/06',
        '2019/08/07',
        '2019/08/08',
        '2019/08/09',
        '2019/08/10',
        '2019/08/11',
        '2019/08/12',
      ],
      hours: [10.1, 5.1, 4.7, 8.9, 8, 4.7, 4.1],
    });
  });

  it('should be able to calculate average hours slept for all users', () => {
    expect(sleep.calculateAverage(sleep.sleepData, 'hoursSlept')).to.equal(8);
  });
});
