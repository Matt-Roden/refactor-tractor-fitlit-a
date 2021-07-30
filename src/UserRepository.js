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



  
  findFriendsNames(userFriends) {
    let friendsNames = [];
    userFriends.forEach((id) => {
      this.getUser(id)


export default UserRepository;
