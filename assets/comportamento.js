var btnMenu = document.querySelector(".menu-hamburguer");

btnMenu.addEventListener("click", function() {
	console.log("Esse método será chamado quando um clique for dado no elemento com a classe .menu-hamburguer");
});


var textarea = document.querySelector(".text-calc");
var soma = document.querySelector("#add");
var mult = document.querySelector("#mult");
var sub = document.querySelector("#sub");
var div = document.querySelector("#div");

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