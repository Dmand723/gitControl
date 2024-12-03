//Anyone else feel free to add any other fun random features
const body = document.querySelector("body");
const colors = {
  0: {
    rgb: "rgb(255,0,0)",
  },
  1: {
    rgb: "rgb(0,255,0)",
  },
  2: {
    rgb: "rgb(0,0,255)",
  },
  3: {
    rgb: "rgb(255,255,255)",
  },
};
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() == "c") {
    let rand = Math.round(Math.random() * 3);
    body.style = `background-color: ${colors[rand].rgb};`;
  } else if (e.key.toLowerCase() == "v") {
    let randColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`;
    body.style = `background-color: ${randColor};`;
  }
});
