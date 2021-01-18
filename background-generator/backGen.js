var  css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}

function mainBackgroundColor() {
    css.textContent =  
    "linear-gradient(to right, " 
    + "rgb(104, 223, 221)"
    + ", " 
    + "rgb(230, 132, 174)); "
}


color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

mainBackgroundColor()
