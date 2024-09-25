// Question no. 1
let body = document.querySelector("body");
let input = document.createElement("input");

body.prepend(input);
input.setAttribute("type" , "text");

let button = document.createElement("button");
button.innerText = "click me !";
input.insertAdjacentElement("afterend" , button);

// Question no. 2

input.setAttribute("placeholder" , "username");
button.setAttribute("id" , "btn");

// Question no. 3

document.querySelector("#btn").style.backgroundColor = "blue";
document.querySelector("#btn").style.color = "white";

// Question no. 4

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline wavy";
h1.style.color = "purple";
body.prepend(h1);

// Question no. 5

let para = document.createElement("p");
para.innerHTML = "Apna College <b> Delta </b> Practice"
body.append(para);










