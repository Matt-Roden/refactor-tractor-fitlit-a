const singleUserSleepData = [
  { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
  { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
  { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
  {
    userID: 1,
    date: '2019/06/18',
    hoursSlept: 10.4,
    sleepQuality: 3.1,
  },
  {
    userID: 1,
    date: '2019/06/19',
    hoursSlept: 10.7,
    sleepQuality: 1.2,
  },
  { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
  { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
  { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
  { userID: 1, date: '2019/06/23', hoursSlept: 7.8, sleepQuality: 1.5 },
  { userID: 1, date: '2019/06/24', hoursSlept: 8, sleepQuality: 1.3 },
  { userID: 1, date: '2019/06/25', hoursSlept: 5.1, sleepQuality: 3.7 },
  { userID: 1, date: '2019/06/26', hoursSlept: 7.7, sleepQuality: 2.4 },
  { userID: 1, date: '2019/06/27', hoursSlept: 9.4, sleepQuality: 4.6 },
  { userID: 1, date: '2019/06/28', hoursSlept: 7.6, sleepQuality: 4.7 },
  { userID: 1, date: '2019/06/29', hoursSlept: 5.3, sleepQuality: 1.2 },
  { userID: 1, date: '2019/06/30', hoursSlept: 6.9, sleepQuality: 2.5 },
  { userID: 1, date: '2019/07/01', hoursSlept: 4.8, sleepQuality: 4.3 },
  { userID: 1, date: '2019/07/02', hoursSlept: 5.7, sleepQuality: 4.7 },
  {
    userID: 1,
    date: '2019/07/03',
    hoursSlept: 10.1,
    sleepQuality: 2.1,
  },
  { userID: 1, date: '2019/07/04', hoursSlept: 6.9, sleepQuality: 3.5 },
  { userID: 1, date: '2019/07/05', hoursSlept: 8.8, sleepQuality: 1.7 },
  { userID: 1, date: '2019/07/06', hoursSlept: 6.5, sleepQuality: 1.4 },
  { userID: 1, date: '2019/07/07', hoursSlept: 5.9, sleepQuality: 4.8 },
  { userID: 1, date: '2019/07/08', hoursSlept: 9.8, sleepQuality: 4.7 },
  { userID: 1, date: '2019/07/09', hoursSlept: 6.8, sleepQuality: 4.9 },
  { userID: 1, date: '2019/07/10', hoursSlept: 5.3, sleepQuality: 3.2 },
  { userID: 1, date: '2019/07/11', hoursSlept: 5, sleepQuality: 2.8 },
  {
    userID: 1,
    date: '2019/07/12',
    hoursSlept: 10.6,
    sleepQuality: 2.6,
  },
  {
    userID: 1,
    date: '2019/07/13',
    hoursSlept: 10.3,
    sleepQuality: 3.1,
  },
  {
    userID: 1,
    date: '2019/07/14',
    hoursSlept: 10.6,
    sleepQuality: 2.6,
  },
  { userID: 1, date: '2019/07/15', hoursSlept: 9.2, sleepQuality: 1.7 },
  { userID: 1, date: '2019/07/16', hoursSlept: 8.1, sleepQuality: 4.9 },
  { userID: 1, date: '2019/07/17', hoursSlept: 5.1, sleepQuality: 4.9 },
  { userID: 1, date: '2019/07/18', hoursSlept: 7.3, sleepQuality: 3.1 },
  { userID: 1, date: '2019/07/19', hoursSlept: 5.8, sleepQuality: 2.1 },
  { userID: 1, date: '2019/07/20', hoursSlept: 7.3, sleepQuality: 1.2 },
  { userID: 1, date: '2019/07/21', hoursSlept: 5.8, sleepQuality: 4.9 },
  { userID: 1, date: '2019/07/22', hoursSlept: 7.3, sleepQuality: 5 },
  { userID: 1, date: '2019/07/23', hoursSlept: 9.6, sleepQuality: 3.3 },
  { userID: 1, date: '2019/07/24', hoursSlept: 7.4, sleepQuality: 4.9 },
  { userID: 1, date: '2019/07/25', hoursSlept: 4.5, sleepQuality: 1.2 },
  { userID: 1, date: '2019/07/26', hoursSlept: 9.4, sleepQuality: 1.4 },
  { userID: 1, date: '2019/07/27', hoursSlept: 7.3, sleepQuality: 1.4 },
  { userID: 1, date: '2019/07/28', hoursSlept: 9, sleepQuality: 2.6 },
  { userID: 1, date: '2019/07/29', hoursSlept: 7.4, sleepQuality: 3.8 },
  {
    userID: 1,
    date: '2019/07/30',
    hoursSlept: 10.6,
    sleepQuality: 3.6,
  },
  {
    userID: 1,
    date: '2019/07/31',
    hoursSlept: 10.3,
    sleepQuality: 3.5,
  },
  { userID: 1, date: '2019/08/01', hoursSlept: 7.4, sleepQuality: 3.1 },
  { userID: 1, date: '2019/08/02', hoursSlept: 9.7, sleepQuality: 1.8 },
  { userID: 1, date: '2019/08/03', hoursSlept: 8.6, sleepQuality: 3.9 },
  { userID: 1, date: '2019/08/04', hoursSlept: 9.8, sleepQuality: 2.5 },
  { userID: 1, date: '2019/08/05', hoursSlept: 8.1, sleepQuality: 1.8 },
  {
    userID: 1,
    date: '2019/08/06',
    hoursSlept: 10.1,
    sleepQuality: 2.3,
  },
  { userID: 1, date: '2019/08/07', hoursSlept: 5.1, sleepQuality: 4.1 },
  { userID: 1, date: '2019/08/08', hoursSlept: 4.7, sleepQuality: 3.4 },
  { userID: 1, date: '2019/08/09', hoursSlept: 8.9, sleepQuality: 4.3 },
  { userID: 1, date: '2019/08/10', hoursSlept: 8, sleepQuality: 2.1 },
  { userID: 1, date: '2019/08/11', hoursSlept: 4.7, sleepQuality: 4.5 },
  { userID: 1, date: '2019/08/12', hoursSlept: 4.1, sleepQuality: 1 },
  { userID: 1, date: '2019/08/13', hoursSlept: 9.3, sleepQuality: 4 },
  { userID: 1, date: '2019/08/14', hoursSlept: 5.8, sleepQuality: 4.9 },
  { userID: 1, date: '2019/08/15', hoursSlept: 7.9, sleepQuality: 2.3 },
  { userID: 1, date: '2019/08/16', hoursSlept: 5.2, sleepQuality: 1.4 },
  { userID: 1, date: '2019/08/17', hoursSlept: 9.6, sleepQuality: 2.3 },
  { userID: 1, date: '2019/08/18', hoursSlept: 6.8, sleepQuality: 2.7 },
  { userID: 1, date: '2019/08/19', hoursSlept: 5.6, sleepQuality: 3.1 },
  {
    userID: 1,
    date: '2019/08/20',
    hoursSlept: 10.2,
    sleepQuality: 4.8,
  },
  { userID: 1, date: '2019/08/21', hoursSlept: 6.2, sleepQuality: 2.9 },
  { userID: 1, date: '2019/08/22', hoursSlept: 6.4, sleepQuality: 4.6 },
  { userID: 1, date: '2019/08/23', hoursSlept: 4.6, sleepQuality: 3.1 },
  { userID: 1, date: '2019/08/24', hoursSlept: 9.3, sleepQuality: 2.6 },
  {
    userID: 1,
    date: '2019/08/25',
    hoursSlept: 10.4,
    sleepQuality: 1.9,
  },
  { userID: 1, date: '2019/08/26', hoursSlept: 9.9, sleepQuality: 3.8 },
  { userID: 1, date: '2019/08/27', hoursSlept: 5.4, sleepQuality: 1.4 },
  { userID: 1, date: '2019/08/28', hoursSlept: 7.9, sleepQuality: 1.6 },
  { userID: 1, date: '2019/08/29', hoursSlept: 9.9, sleepQuality: 1.6 },
  { userID: 1, date: '2019/08/30', hoursSlept: 4.3, sleepQuality: 1.6 },
  { userID: 1, date: '2019/08/31', hoursSlept: 7.1, sleepQuality: 1.9 },
  { userID: 1, date: '2019/09/01', hoursSlept: 4.4, sleepQuality: 2.7 },
  { userID: 1, date: '2019/09/02', hoursSlept: 7.7, sleepQuality: 4.4 },
  { userID: 1, date: '2019/09/03', hoursSlept: 8.3, sleepQuality: 1.3 },
  { userID: 1, date: '2019/09/04', hoursSlept: 10, sleepQuality: 4.7 },
  { userID: 1, date: '2019/09/05', hoursSlept: 9.8, sleepQuality: 3.2 },
  { userID: 1, date: '2019/09/06', hoursSlept: 9.6, sleepQuality: 4.7 },
  { userID: 1, date: '2019/09/07', hoursSlept: 8.6, sleepQuality: 3 },
  {
    userID: 1,
    date: '2019/09/08',
    hoursSlept: 10.1,
    sleepQuality: 2.8,
  },
  { userID: 1, date: '2019/09/09', hoursSlept: 7.3, sleepQuality: 4.8 },
  { userID: 1, date: '2019/09/10', hoursSlept: 5.1, sleepQuality: 4.7 },
  { userID: 1, date: '2019/09/11', hoursSlept: 8.6, sleepQuality: 3.7 },
  {
    userID: 1,
    date: '2019/09/12',
    hoursSlept: 10.5,
    sleepQuality: 1.8,
  },
  { userID: 1, date: '2019/09/13', hoursSlept: 9.1, sleepQuality: 1.5 },
  { userID: 1, date: '2019/09/14', hoursSlept: 6.5, sleepQuality: 4.2 },
  { userID: 1, date: '2019/09/15', hoursSlept: 6.8, sleepQuality: 2 },
  { userID: 1, date: '2019/09/16', hoursSlept: 8.8, sleepQuality: 1.8 },
  { userID: 1, date: '2019/09/17', hoursSlept: 6.3, sleepQuality: 3.2 },
  { userID: 1, date: '2019/09/18', hoursSlept: 4.1, sleepQuality: 2.2 },
  { userID: 1, date: '2019/09/19', hoursSlept: 9.9, sleepQuality: 1.7 },
  { userID: 1, date: '2019/09/20', hoursSlept: 8.6, sleepQuality: 2.6 },
  { userID: 1, date: '2019/09/21', hoursSlept: 10.7, sleepQuality: 4 },
  { userID: 1, date: '2019/09/22', hoursSlept: 4.6, sleepQuality: 1.4 },
];
export default singleUserSleepData;
