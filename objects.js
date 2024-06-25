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

for (var i = 0; i < users.length; i++) {
  var tolog = users[i].name + "'s age is " + users[i].age; 
  console.log(tolog);
}
