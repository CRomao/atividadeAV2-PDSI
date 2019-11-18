var btnMenu = document.querySelector(".menu-hamburguer");

btnMenu.addEventListener("click", function() {
	console.log("Esse método será chamado quando um clique for dado no elemento com a classe .menu-hamburguer");
});


var textarea = document.querySelector(".text-calc");

function insert(num){
	textarea.innerHTML = textarea.innerHTML+num;
}


function clean(){
	textarea.innerHTML = "";
}


function disableButton(){
	let soma = document.querySelector("#add");
	let mult = document.querySelector("#mult");
	let sub = document.querySelector("#sub");
	let div = document.querySelector("#div");
	soma.style.backgroundColor = "#b2bec3";
	soma.style.disable = true;
	mult.style.backgroundColor = "#b2bec3";
	mult.style.disable = true;
	sub.style.backgroundColor = "#b2bec3";
	sub.style.disable = true;
	div.style.backgroundColor = "#b2bec3";
	div.style.disable = true;
}

