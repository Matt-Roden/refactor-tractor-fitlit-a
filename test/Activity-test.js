import { expect } from 'chai';
import singleUserActivityData from '../src/data/single-user-activity-test-data';
import activityData from '../src/data/activity';
import userData from '../src/data/users';
import Activity from '../src/Activity';

describe('Activity', function () {
  let activity, userID;

  beforeEach(() => {
    userID = 1;
    // userRepo = new UserRepository(userData);
    activity = new Activity(userData, userID, activityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', () => {
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
      activity.calculateMiles(userID, '2019/06/15', activity.getUser(userID))
    ).to.equal(3.0);
  });

  it('should return the number of minutes a given user was active on a given date', () => {
    expect(activity.getActivityByDate('2019/06/15', 'minutesActive')).to.equal(140);
  });

  it('should return the average minutes active for any given week', () => {
    expect(activity.getAverageMinutesActiveByWeek('2019/06/24')).to.equal(154);
  });

  it('should find all the days a user exceeded their daily step goal', () => {
    expect(activity.findAllExceededStepGoalDays(userID)).to.deep.equal([
      '2019/06/17', '2019/06/20', '2019/06/22',
      '2019/06/23', '2019/06/28', '2019/06/30',
      '2019/07/05', '2019/07/07', '2019/07/08',
      '2019/07/09', '2019/07/14', '2019/07/20',
      '2019/07/21', '2019/07/22', '2019/07/26',
      '2019/07/31', '2019/08/01', '2019/08/08',
      '2019/08/10', '2019/08/15', '2019/08/17',
      '2019/08/24', '2019/08/25', '2019/08/29',
      '2019/09/05', '2019/09/07', '2019/09/09',
      '2019/09/11', '2019/09/12', '2019/09/15',
      '2019/09/16', '2019/09/19', '2019/09/20'
    ]);
  });

  describe('compareStepGoal', () => {
    it("should return true if goal is met", () => {
      expect(activity.compareStepGoal('2019/09/19', userID)).to.equal(true);
    });
    it('should return false if goal is not met', () => {
      expect(activity.compareStepGoal('2019/09/21', userID)).to.equal(false);
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
