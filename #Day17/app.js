// question no. 1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(arr);
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (num == arr[i]) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// question no. 2 & 3

let number = 5643546;
console.log(number);
let digit = 0;
let sum = 0;
number = number.toString();
for (dig of number) {
  digit++;
  let numr = parseInt(dig);
  sum = sum + numr;
}
console.log(digit);
console.log(sum);

// question no. 5

let numArray = [54, 87, 3, 54, 201, 42, 5];
let largNum = 0;

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > largNum) {
    largNum = numArray[i];
  }
}

console.log(numArray);
console.log("lagest no. is", largNum);

// question no. 4

let facNum = 7;
let factroial = 0;
if (factroial == 0) {
  console.log(1);
} else {
  for (i = facNum; i >= 1; i--) {
    factroial = factroial * i;
  }
  console.log(factroial);
}

  