// Question no. 1
let array = [40, 30, 20, 10];
const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let average = sum / arr.length;
  return average;
};

arrayAverage(array);

// Question no. 2

const even = (n) => {
  if (n % 2 == 0) {
    return `the given number ${n} is even`;
  } else {
    return `the given number ${n} is not even`;
  }
};

// Question no. 3
const object = {
  message: "Hello,World!",
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000); // undefined

// Question no. 4
let length = 4;
function callback() {
  console.log(this.length);
}
const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object2.method(callback, 1, 2);
