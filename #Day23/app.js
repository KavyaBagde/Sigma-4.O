let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    let h3 = document.querySelector("h3");
    randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

const getRandomColor = () =>{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r},${g},${b})`
    return color;
}

// Question no. 2
let btn2 = document.createElement("button");
let body = document.querySelector("body");

body.append(btn2);
btn2.innerText ="click for green";
btn2.addEventListener("click" , function(){
    btn2.style.backgroundColor = "green";
})

// Question no. 3

let h2 = document.createElement("h2");
let input = document.createElement("input");

body.append(h2);
body.append(input);

input.addEventListener("input" , function(){
    h2.innerText = input.value;
})