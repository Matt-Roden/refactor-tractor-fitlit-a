import { expect } from 'chai';

import Sleep from '../src/Sleep';
import sleepData from '../src/data/sleep';
import singleUserSleepData from '../src/data/single-user-sleep-test-data';

describe.only('Sleep', () => {
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
    expect(sleep.sleepData).to.equal(sleepData);
  });

  it("should hold a single user's data", () => {
    expect(sleep.userSleepData).to.equal([]);
  });

  it('should be able to calculate average hours slept for a user', () => {
    expect(sleep.calculateAverage('hoursSlept')).to.equal();
  });

  it('should be able to calculate average quality of sleep for a user', () => {
    expect(sleep.calculateAverage('sleepQuality')).to.equal();
  });

  it("should be able to get a user's sleep quality by date", () => {
    expect(sleep.getSleepByDate('sleepQuality')).to.equal();
  });

  it("should be able to get a user's hours slept by date", () => {
    expect(sleep.getSleepByDate('hoursSlept')).to.equal();
  });

  it("should be able to get a user's sleep quality for any week", () => {
    expect(sleep.getSleepByDate('sleepQuality')).to.equal();
  });

  it("should be able to get a user's hours slept for any week", () => {
    expect(sleep.getSleepByDate('hoursSlept')).to.equal();
  });

  it('should be able to calculate average hours slept for all users', () => {
    expect(sleep.calculateAverage('hoursSlept')).to.equal();
  });
});
