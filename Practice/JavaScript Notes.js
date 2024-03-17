//Template Literals
//Use backticks to create a template literal
let name = 'John';
let age = 30;
let job = 'Web Developer';

console.log(`Hello, my name is ${name}, I am ${age} years old and I am a ${job}.`);


//Ternanry Operator 
//Shorthand for an if else statement
let purchase = 125;
let discount = purchase >= 100 ? 10 : 0;
console.log(`You have to pay ${purchase - discount} dollars.`);

//Switch Statement
//Useful when you have a lot of if else statements
let day = 1;

switch (day) {
    case 1:
        console.log('day 1');
        break;
    case 2:
        console.log('day 2');
        break;
    case 3:
        console.log('day 3');
        break;
    default:
        console.log('Invalid day');
}

//String methods
//methods that can be used on strings
let username = "okcabroad ";

console.log(username.charAt(0)); //character at index 0
console.log(username.indexOf('k')); //index of the first occurence of k
console.log(username.length); //length of the string
console.log(username.trim()); //removes whitespace from both ends of the string
console.log(username.toUpperCase()); //converts the string to uppercase
console.log(username.toLowerCase()); //converts the string to lowercase
console.log(username.repeat(3)); //repeats the string 3 times
console.log(username.includes('ok')); //checks if the string includes the substring

//String Slicing 
//Use slice method to extract a part of a string
const fullname = "Oliver Kim Clarke";
let firstname = fullname.slice(0, 6);
let middlename = fullname.slice(7, 10);
let lastname = fullname.slice(11, 17);
console.log(firstname);
console.log(middlename);
console.log(lastname);

//Method Chaining
//Chain multiple methods together
let ElonMusk = "elOn MuSk";

    //normal way//
let letter = ElonMusk.charAt(0);
letter = letter.toUpperCase();
let rest = ElonMusk.slice(1);
rest = rest.toLowerCase();
console.log(letter + rest);

    //Method Chaining//
ElonMusk = ElonMusk.charAt(0).toUpperCase() + ElonMusk.slice(1).toLowerCase();
console.log(ElonMusk);

//Strict Equality
const pi = 3.14;
const PI = "3.14";

    //== checks for value only
    //=== checks for both value and datatype
    console.log(pi == PI); //true
    console.log(pi === PI); //false