let heading = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      heading.style.color = color;
      resolve("color changes");
    }, delay);
  });
}

async function change() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
   changeColor("yellow", 1000);
}

change();