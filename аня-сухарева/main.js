var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.backgroundColor = "red";


ctx.fillStyle = "indigo"
ctx.fillRect(100,100,100,100);

ctx.strokeRect(200,200,100,100);