let h1 = document.querySelector("h1");

function setColor(color, timeOut) {
 return new Promise((resolve, reject)=>{   
  setTimeout(() => {
    h1.style.color = color;
    resolve("color changed");
  }, timeOut);
  })
}

setColor("red" , 1000)
.then(()=>{
    return setColor("green" , 1000);
})
.then(()=>{
    return setColor("blue" , 1000);
})
.then(()=>{
    return setColor("pink" , 1000);
})
.then(()=>{
    return setColor("yellow" , 1000);
})
.then(()=>{
    return setColor("purple" , 1000);
})