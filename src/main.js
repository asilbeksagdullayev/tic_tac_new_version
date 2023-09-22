const first = document.querySelector("h1");
const second = document.querySelector("p");
first.onclick = function click() {
 first.style.display = "none";
 setTimeout(() => {
  second.style.display = "block";
}, 2000);

};
click() ;