//Question no.  1

let msg ="help!";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//Question no.  2

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna" , "Our"));

//Question no.  3

let newName = name.slice(4);
console.log(newName.replace("ll","tt"));

//Question no.  4

let mont = ['jan', 'jul','march','aug'];
console.log(mont);

mont.splice(0,2, "jul" , "jun");
console.log(mont);

// asg question 1

// let array = [7,9,0,-2,5,-5,8,3,9];
// let n =6;
// array.splice(n);
// console.log(array);

// asg question 2

let array = [7,9,0,-2,5,-5,8,3,9];
let n= 7;
array.splice(0, array.length-n);
console.log(array);

// asg question 3

let string =" ";
if(string==""){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

// asg question 4

let str = "KavYa BaGde";
let idx = 4;

if(str[idx].toUpperCase() == str[idx]){
    console.log("char is in upper case");
}else{
    console.log("char is in lower case");
}

// asg question 5
let str2 = "        hello         ";
console.log(str2);
console.log(str2.trim());

// asg question 6

let arr2 = [56,4,5,23,89,,76,3];
let element = 10;
if(arr2.indexOf(element) != -1){
    console.log("element exists in array");
}else{
    console.log("element does not exists in array");
}
