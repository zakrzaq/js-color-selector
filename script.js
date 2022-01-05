function makeColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
};


document.getElementById("genColor").onclick = function() {
    let newCol1 = makeColor(); 
    let newCol2 = makeColor();
    let newBgGrad = "linear-gradient(37deg, " + newCol1 + ", " + newCol2 + ")";
    document.body.style.backgroundImage = newBgGrad;
    console.log(newCol1, newCol2, newBgGrad);
    // document.body.style.backgroundColor = newCol1;
};



