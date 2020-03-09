// var x =prompt("usd","7"  );
// var usd = 24.42	
 
// alert(x*usd+"uah")
var randr =Math.random() * 255; 
var randg = Math.random() * 255;
var randb = Math.random() * 255;

var box = document.getElementById("box")
var rand = Math.random() * 500;
box.style.width = rand + "px"
box.style.height = "100px"
box.style.backgroundColor = "rgb("+randr+","+randg+","+randb+") "



 for (var i = 0; i < 100; i++) {
 box.innerHTML += '<div class="box"></div>'

 }
