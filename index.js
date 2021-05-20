// This is my firt JavaScript code
console.log('Hello World');

let name = 'Michael';  // declaring a variable
console.log(name);

// Cannot be reserver keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Michael';
let secondName = 'Fábrik';
console.log(firstName);
console.log(secondName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// you cannot change a constant (const)
// const interestRate = 0.3;
//interestRate = 1;

let namee = 'Michael'; //String Literal
let age = 17; //Number Literal
let isApproved = true; //Boolean Literal (true/false)
let firsttName = undefined;
let selectedColor = null; //if you want to reset variable

// --OBJECTS--
let person = {
    namee: 'Michael',
    age: 17
}
//Dot notation - better
person.namee = 'John';
//Bracket notation
person['namee'] = 'Mary';
console.log(person.namee);

// --ARRAYS--
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// --FUNCTIONS--   
// performing a task 
function greet(nameee, lastName) {  //(parameter)
    console.log('Hello ' + nameee + ' ' + lastName);
}
greet('John', 'Smith'); //(argument)

// calculating a value
function square(number) {
    return number * number;
}
//let number = square(2);     |   console.log(square(2));
//console.log(number);        |   
console.log(square(2));

