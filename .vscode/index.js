const { readFile } = require("fs");

readFile("./sample.txt",function(contents){
    console.log(contents);
});

console.log("Hi there")

var counter=20;

for(var i=0;i<=10;i++){
    counter=counter+i;
}

console.log(counter);
