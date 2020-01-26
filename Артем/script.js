// var test = document.getElementById("box");
// var	colors = ["red","green","blue","indigo"];


// test.style.backgroundColor = colors[2];
// test.style.width = "100px";
// test.style.height = "100px";	

// alert("Hi");
// console.log("23342")

var text = "text for shifr"
var letters = text.split("");
var shift = []
var option = prompt("1 or 2","1");

for(var i = 0; i<letters.length;i++){
	var code = letters[i].charCodeAt(0)
	if(option == "1"){
		code += 3	
	}else if(option == "2"){
		code -= 3
	}else{
		alert("eror")
	}
	shift.push(String.fromCharCode(code))
} 
console.log(shift)

// (text.charCodeAt(0))
// String.fromCharCode(97)





