const fs = require('fs');

function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

function fileIsRead(err, filecontent) {
  const num = parseInt(filecontent);
  sum(num);
}

fs.readFile('test.txt', 'utf8', fileIsRead);

console.log("HELLO");
sum(21);
sum(10);