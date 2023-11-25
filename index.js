const canvas = document.getElementById("map-canvas");
const generate_button = document.getElementById("generate-button");

const ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "red";


function xyRandomGen () {
    let max = Math.random() * 700;
    let min = Math.random() * 100;
    let random = Math.floor(Math.random() * (max - min) + min)
    return {random}
}


function generateShape () {
    const randomVal = xyRandomGen()
    ctx.fillRect(randomVal.random, randomVal.random, randomVal.random, randomVal.random);
    console.log(randomVal);

};

generate_button.addEventListener("click", generateShape);




