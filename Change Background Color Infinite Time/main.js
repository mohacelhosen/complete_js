
function changeColor(){
    let testColor = "#";
    for(let j=0; j<6; j++){
        testColor = testColor+Math.floor(Math.random()*10);
    }
    console.log(testColor)
    document.body.style.backgroundColor= testColor;
}

let interval = setInterval(changeColor, 1000);

function stop(){
    clearInterval(interval)
}

function start(){
    interval = setInterval(changeColor,1000)
}


