var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "guille" && password == "guille"){
window.location = "camaras.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Datos incorrectos, le quedan "+attempt+" intentos;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}