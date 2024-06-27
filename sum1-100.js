const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const numbers = data.split('\n'); // Splitting the data by newline
  let sum = 0;
  
  for (let i = 1; i < numbers.length; i++) {
    const n = parseInt(numbers[i]);
    
    if (!isNaN(n)) {
      sum += n;
    }
  }
  
  console.log('Sum:', sum);
});
