import sleepData from './data/sleep';

class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  getUser(id) {
    return this.users.find(function (user) {
      return user.id === id;
    });
  }
}
export default UserRepository;
