var background = document.getElementById("background");
background.style.width = window.innerWidth + "px";
background.style.height = document.documentElement.clientHeight + "px";
console.log(document.documentElement.clientHeight);

var container = document.getElementsByClassName("container")[0];
container.style.width = window.innerWidth + "px";