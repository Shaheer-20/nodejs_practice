function printPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var str = '';
    for (var j = 1; j <= rows - i; j++) {
    var  str =str+' ';
    }
    for (var k = 1; k <= 2 * i; k++) {
     var str =str+ '*';
    }
    console.log(str);
  }
}

printPyramid(10);
