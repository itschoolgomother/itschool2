function setup () {
	createCanvas(innerWidth, innerHeight,WEBGL);
	


}
function draw() {
	background(70,70,200);
	rotateX(mouseX / 250);
	rotateY(mouseX / 250);

	normalMaterial();
	cone(30, 65, 16, 16);

}
