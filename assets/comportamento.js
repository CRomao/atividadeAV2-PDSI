var btnMenu = document.querySelector(".menu-hamburguer");

btnMenu.addEventListener("click", function() {
	console.log("Esse método será chamado quando um clique for dado no elemento com a classe .menu-hamburguer");
});


var textarea = document.querySelector(".text-calc");
var soma = document.querySelector("#add");
var mult = document.querySelector("#mult");
var sub = document.querySelector("#sub");
var div = document.querySelector("#div");
var flagMenuH = 0;

function insert(num){
	textarea.innerHTML = textarea.innerHTML+num;
}


function clean(){
	textarea.innerHTML = "";
	soma.style.backgroundColor = "#7f8c8d";
	mult.style.backgroundColor = "#7f8c8d";
	sub.style.backgroundColor = "#7f8c8d";
	div.style.backgroundColor = "#7f8c8d";
}


function disableButton(){
	soma.style.backgroundColor = "#b2bec3";
	soma.style.disable = true;
	mult.style.backgroundColor = "#b2bec3";
	mult.style.disable = true;
	sub.style.backgroundColor = "#b2bec3";
	sub.style.disable = true;
	div.style.backgroundColor = "#b2bec3";
	div.style.disable = true;
}

function result(){
	textarea.innerHTML = eval(textarea.innerHTML);
}

var divMenuH = document.querySelector(".menuH");

function menuH(){
	if(flagMenuH == 0){
		divMenuH.style.height = "100%";
		divMenuH.style.width = "100%";
		divMenuH.style.backgroundColor = "#3498db";
		divMenuH.style.marginLeft = "0";
		divMenuH.style.position = "relative";
		document.body.style.overflow = "hidden";
		divMenuH.style.transitionDuration = "0.4s";
		divMenuH.style.transitionDelay = "0.1s";
		flagMenuH =1;
	}else{
		divMenuH.style.height = "0";
		divMenuH.style.width = "0";
		divMenuH.style.marginLeft = "-180%";
		document.body.style.overflow = "visible";
		flagMenuH=0;
	}
}

var body = window.innerWidth;
var body1 = document.querySelector(".body");
	console.log(body1.style);
if(body >= "601"){
	divMenuH.style.height = "0";
	divMenuH.style.width = "0";
	divMenuH.style.marginLeft = "-180%";
	document.body.style.overflow = "visible";
}
redim();

function redim(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var screenWidth = screen.width;
  var screenHeight = screen.height;

  console.log(windowWidth);
  console.log(windowHeight);
  console.log(screenWidth);
  console.log(screenHeight);

}