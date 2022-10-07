function changeColor(){
    const chars = "0123456789ABCDEF";
    let colorCode = "#"
    for(let i=0; i<6; ++i){
        colorCode = colorCode + chars[Math.floor(Math.random()*16)];
    }

    document.querySelector("#canvas").style.backgroundColor = colorCode;
}

document.querySelector("#button").addEventListener("click", changeColor);