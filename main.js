let count = 0
const countClick = document.querySelector("h2");



function countClicks() {
    count++
    countClick.textContent= `Contador de clicks: ${count}` 
    if(count === 10){
        let img = document.getElementById("amsieda").setAttribute("style","opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)");
        
    }
    }

