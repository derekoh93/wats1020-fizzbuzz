// Place your FizzBuzz code here. 
var rangeLimit = 100;

// Count through numbers 1-20 to see which are divisible by 3, 5, or both.
for (i=1; i<=rangeLimit; i++) {
  // For each number check;

  // See if it is divisble by 3
  if (i % 3 === 0) {
      // If so: see if it is ALSO divisible by 5
      if (i % 5 === 0) {
         // If divisible by 3 and 5: print fizzbuzz
          console.log ('fizzbuzz');    
      } else {
          // If only divisible by 3: print fizz
          console.log ('fizz');
      } 
  } else if (i % 5 === 0) {
     // See if it is divisble by 5
     // If so: print buzz
    console.log('buzz');
  } else {
      // See if it is not divisble by 3 or 5
      // If so: print number
    console.log(i);
  }

}
