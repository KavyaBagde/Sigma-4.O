// Question no. 1
let arr = [45, 69, 1, 75, 88, 41, 58];
let num = 65;

function greater(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= number) {
      return array[i];
    }
  }
}

// Question no. 2

let str = "kavyalaxmanbagde";

function unique(string) {
  let ans = "";
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (ans.indexOf(currentChar) == -1) {
      ans += currentChar;
    }
  }
  // console.log(ans);
  return ans;
}

// Question no. 3

country = ["Australia", "Germany", "United States of America"];
const longestCoun = function (coun) {
  let largestCountry = "";
  for (let i = 0; i < coun.length; i++) {
    if (coun[i].length > largestCountry.length) {
      largestCountry = coun[i];
    }
  }
  return largestCountry;
};

// Question no. 4

let string = "KaVyA LAXMAN BAGDE";
const vowelCount = function (string) {
  let count = 0;
  for (alp of string.toLowerCase()) {
    if (
      alp === "a" ||
      alp === "e" ||
      alp === "i" ||
      alp === "o" ||
      alp === "u"
    ) {
      count++;
    }
  }
  return count;
};

// Question no. 5
const randomNum = function (start, end) {
  let diff = end - start;
  let random = Math.floor(Math.random() * diff) + start;

  return random;
};
