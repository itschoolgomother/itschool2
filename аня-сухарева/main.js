var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.backgroundColor = "red";
ctx.fillStyle = "indigo"

// for (var i = 0; i < 100; i++) {
// var randomX = Math.random() * innerWidth;
// var randomY = Math.random() * innerHeight;
// var random = Math.random() * 255;
// ctx.fillStyle = 'rgb('+random+','+random+','+random+')';
// ctx.fillRect(randomX,randomY ,random,random);
// }

 // ctx.beginPath();
 // ctx.moveTo(200,200);
 // ctx.lineTo(200,800);
 // ctx.lineTo(800,800);
 // ctx.lineTo(200,200);
 // ctx.fill();
 // ctx.closePath();


function triangle(colors,x,y){
ctx.beginPath();
ctx.strokeStyle = colors;
ctx.moveTo(x,y);
ctx.lineTo(400,600);
ctx.lineTo(600,600);
ctx.lineTo(x,y);
ctx.stroke();
ctx.closePath();
}
 triangle("pink",400,400)
 triangle("green",100,100)
 triangle("black",300,300)
 triangle("pink",200,200)
 triangle("pink",500,500)
 triangle("pink",600,600)
 triangle("pink",700,700)
 triangle("pink",800,800)
 

 






































































































































 

































































































































































































































































































































































































































































