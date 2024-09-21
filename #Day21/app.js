// question no. 1
let arr = [2, 4, 6, 8];

const sqare = arr.map((num) => num * num);
console.log(sqare);
const sum = arr.reduce((res,el)=> res+el );
console.log(sum);
const avg = sum / arr.length;
console.log(avg);

// question no. 2

let arr2 = [12, 23, 45, 67];

let newArr2 = arr2.map((num)=> num + 5 );

// question no. 3

let names = ["kavya" , "harsh" , "ritesh" , "neeraj"];

let upperName = names.map((name) => name.toUpperCase());

// question no. 5
let obj1 = {
    name: "kavya",
    branch: "cse"
}

let obj2 = {
    class:"FE5",
    rollNo:"BS1504"
}

let student = {...obj1 , ...obj2}
console.log(student);

// question no. 4

const doubleAndReturnArgs = (arr,...args) => {
    const doubleArgs = args.map((num)=> num*2);

    return [...arr , ...doubleArgs]
} 


