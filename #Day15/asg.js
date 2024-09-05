// Question no. 1

let num =  40;
if(num%10 === 0){
    console.log("Good");
}else {
    console.log("Bad")
}

// Question no. 2

let firstName = prompt("enter your name");
let age = prompt("enter your age");

alert(`${firstName} is ${age} years old.`);

// Question no. 3

let quater = 2;

switch (quater){

    case 1:
        console.log("months in quater 1 are : January, February, March");
        break;
    case 2:
        console.log("months in quater 2 are : April, May, June");
        break;
    case 3:
        console.log("months in quater 3 are : July, August, September");
        break;
    case 4:
        console.log("months in quater 4 are : October, November, December");
        break;
    default:
        console.log("Please enter a valid quater no. betn. 1 to 4");
}

// Question no. 4

let str = "Anushka";

if( (str[0] === "a" || str[0] === "A") && str.length > 5 ){
    console.log("string is good string");
}else{
    console.log("string is not a good string");
}

// Question no. 5

let num1 = 5;
let num2 = 6;
let num3 = 8;


if( (num1>num2) && (num1>num3) ){ // for num 1
    console.log(`${num1} is largest number`);
}else if ( (num2>num3) && (num2>num1) ){ // for num 2
    console.log(`${num2} is largest number`);
}else{ // for num 3
    console.log(`${num3} is largest number`);
}

// Question no. 6

let number1 = 15;
let number2 = 15352425;

let _1last = number1 % 10;
let _2last = number2 % 10;
if( _1last === _2last){
    console.log("last digit is same");
}else{
    console.log("last digit is not same");
}