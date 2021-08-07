var menubtn = document.getElementById("menubtn");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

menubtn.onclick = function(){
if(navbar.style.right === "-250px"){
navbar.style.right = "0";
}
else{
    navbar.style.right = "-250px";
}
}