const canvas = document.getElementById("map-canvas");
const generate_button = document.getElementById("generate-button");

const ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "red";


function xyRandomGen () {
    let max = Math.random() * 700;
    let min = Math.random() * 100;
    let random1 = Math.floor(Math.random() * (max - min) + min);
    let random2 = Math.ceil(Math.random() * (max - min) + min);
    return {random1, random2}
};

function getRandomArray() {
    const randomLength = Math.floor(Math.random() * 10) + 1;
    const randomArray = Array.from({ length: randomLength }, () => Math.random());
    return randomArray;
};

function generateShape () {

    const countArray = getRandomArray();

    for (let i = 0; i < countArray.length; i++) {
        const randomVal = xyRandomGen()
        ctx.strokeRect(randomVal.random1, randomVal.random2, randomVal.random2, randomVal.random2);  
    };
    
    console.log(countArray);


};

generate_button.addEventListener("click", generateShape);




