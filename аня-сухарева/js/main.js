
function auth(mylogin,mypas) {

var login = prompt("login:","admin");
var pas = prompt("Password","123")

if(login == mylogin && pas == mypas) {
	alert("Hi,"+login)
}else{
	alert("Bye")
}

}
auth("anna S", "078056034")