import sleepData from './data/sleep';

class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  getUser(id) {
    return this.users.find((user) => id === user.id) 
  }

  calculateAverageStepGoal() {
    let goals = this.users.map(function (user) {
      return user.dailyStepGoal;
    });
    let total = goals.reduce(function (sum, goal) {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
  }

  findFriendsNames(userFriends) {
    let friendsNames = [];
    userFriends.forEach((id) => {
      this.getUser(id)
    })
  }
};
export default UserRepository;
