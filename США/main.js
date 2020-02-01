var box = document.getElementById("box");
box.style.width="100px"
box.style.height = "100px"
box.style.backgroundColor = "red"
window.addEventListener("scroll",function(e){
	box.style.top = pageYOffset+"px";
	box.style.width = pageYOffset/2+"px";
	console.log(pageYOffset)
});