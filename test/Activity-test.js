import { expect } from 'chai';
import singleUserActivityData from '../src/data/single-user-activity-test-data';
import activityData from '../src/data/activity';
import Activity from '../src/Activity';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('Activity', function () {
  let userRepo, activity, userID;

  beforeEach(() => {
    userID = 1;
    activity = new Activity(activityData, userID);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function () {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should store all activity data for a specific user', () => {
    expect(activity.userActivityData).to.deep.equal(singleUserActivityData);
  });

  it("should find a user's data for any given week", () => {
    expect(activity.selectWeek('2019/06/19')).to.deep.equal([
      {
        userID: 1,
        date: '2019/06/15',
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 1,
        date: '2019/06/16',
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 1,
        date: '2019/06/17',
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 1,
        date: '2019/06/18',
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: '2019/06/19',
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
    ]);
  });

  it("should calculate a user's mileage for a specific day", () => {
    expect(
      activity.calculateMiles(1, '2019/06/15', userRepo.users[0])
    ).to.equal(3.0);
  });

  it('should return the number of minutes a given user was active on a given date', () => {
    expect(activity.getMinutesActiveByDate('2019/06/15')).to.equal(140);
  });

  it('should return the average minutes active for any given week', () => {
    expect(activity.getAverageMinutesActiveByWeek('2019/06/24')).to.equal(154);
  });

  it('should find all the days a user exceeded their daily step goal', () => {
    expect(activity.findAllExceededStepGoalDays(2, user2)).to.deep.equal([
      '2019/06/15',
      '2019/06/16',
    ]);
  });

  describe('compareStepGoal', function () {
    it("should return false if goal isn't met", function () {
      activity1.compareStepGoal(userRepository);
      expect(activity1.reachedStepGoal).to.equal(false);
    });
    it('should return true if goal is met', function () {
      activity2.compareStepGoal(userRepository);
      expect(activity2.reachedStepGoal).to.equal(true);
    });
  });
});

// it('should hold a userId', function() {
//   expect(activity.userId).to.equal(2);
// });
// it('should hold a date', function() {
//   expect(activity1.date).to.equal("2019/06/15");
// });
// it('should hold number of steps', function() {
//   expect(activity1.steps).to.equal(3684);
// });
// it('should hold minutes active', function() {
//   expect(activity2.minutesActive).to.equal(280);
// });
// it('should hold flights of stairs', function() {
//   expect(activity2.flightsOfStairs).to.equal(22);
// });
// it('should have a default value of 0 for miles walked', function() {
//   expect(activity2.milesWalked).to.equal(0);
// });
// it('should have a default value of null for reached step goal', function() {
//   expect(activity2.reachedStepGoal).to.equal(null);
// });
// it('doActivity should add activities to user record', function() {
//   expect(user1.activityRecord.length).to.equal(1);
// });
3;
