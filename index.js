const canvas = document.getElementById("map-canvas");

const ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "royalblue";
ctx.fillRect(400, 100, 200, 200);
ctx.fillRect(100, 500, 200, 200);
