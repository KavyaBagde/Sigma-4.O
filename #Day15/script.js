// Question no. 1

let signal = "yellow";

if (signal == "red") {
  console.log("stop");
}
if (signal == "yellow") {
  console.log("ready");
}
if (signal == "green") {
  console.log("go");
}

// same using else if

if (signal == "red") {
  console.log("stop");
} else if (signal == "yellow") {
  console.log("ready");
} else if (signal == "green") {
  console.log("go");
}

//Question no. 2

let size = "S";

if (size === "XL") {
  console.log(`price for ${size} size popcorn is Rs.250`);
} else if (size === "L") {
  console.log(`price for ${size} size popcorn is Rs.200`);
} else if (size === "M") {
  console.log(`price for ${size} size popcorn is Rs.100`);
} else if (size === "S") {
  console.log(`price for ${size} size popcorn is Rs.50`);
} else {
  console.log("we don't have such option in menu");
}

//Question no. 3

let str = "apna college";

if (str[0] === "a" && str.length > 3) {
  console.log("string is 'Good string'");
} else {
  console.log("string is 'Not a good string'");
}

//Question no. 4

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("enter no. between 1 to 7 only");
}

