function printAllUser(users) {
  for (var i = 0; i < users.length; i++) {
    var toLog = users[i].name + "'s age is " + users[i].age;
    console.log(toLog);
  }
}

var users = [
  {
    name: "shaheer",
    age: 21
  },
  {
    name: "john",
    age: 25
  }
];

printAllUser(users);