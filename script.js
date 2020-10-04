
var css = document.querySelector("h2");
var colo1 = document.querySelector(".colo1");
var colo2 = document.querySelector(".colo2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right," 
	+ colo1.value 
	+ ", " 
	+ colo2.value 
	+ ")";
  css.textContent = body.style.background + ";";
}

colo1.addEventListener("input", setGradient);

colo2.addEventListener("input", setGradient);
