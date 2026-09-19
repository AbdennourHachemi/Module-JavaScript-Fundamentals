const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//console.log(num);

//First operation 
// num is generating  a random floating number with method Math.random() between 0 and 1

let test = Math.random()
console.log(test)

//Second operation
//The generated number is multiplied by 100 being (maximum =100 -1 +1)

 test =Math.random() *(maximum - minimum +1);
 console.log(test)

 //Third operation 
 //num is rounded down to the nearset whole number using the method Math.floor

  test = Math.floor(Math.random() * (maximum - minimum + 1)) 
  console.log(test)

  // Last operation is to add 1 to num 1 is stored in a variable called minimum

  test =Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
 console.log(test)
 console.log(num)