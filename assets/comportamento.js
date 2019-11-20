var textarea = document.querySelector(".text-calc");
vetOperacoes = new Array(4);
vetOperacoes[0] = document.querySelector("#add");
vetOperacoes[1] = document.querySelector("#mult");
vetOperacoes[2] = document.querySelector("#sub");
vetOperacoes[3] = document.querySelector("#div");
var flagMenuH = 0;
var divMenuH = document.querySelector(".menuH");
var contOperacao = 0;

function insert(num){
	if(num == '*' || num == '/' || num == '+' || num == '-'){
		if(contOperacao == 0){
			textarea.innerHTML = textarea.innerHTML+num;
			contOperacao = 1;
		}else{
			;
		}
	}else{
		textarea.innerHTML = textarea.innerHTML+num;
	}
	
}

function clean(){
	textarea.innerHTML = "";
	contOperacao = 0;
	for (let i = 0; i < vetOperacoes.length; i++) {
		vetOperacoes[i].style.backgroundColor = "#7f8c8d";
	}
}

function disableButton(){
	for (var i = 0; i < vetOperacoes.length; i++) {
		vetOperacoes[i].style.backgroundColor = "#b2bec3";
		vetOperacoes[i].style.disable = true;
	}
}

function result(){
	textarea.innerHTML = eval(textarea.innerHTML);
}

function fecharMenuMob(){
	divMenuH.style.height = "0";
	divMenuH.style.width = "0";
	divMenuH.style.marginLeft = "-180%";
	document.body.style.overflow = "visible";
}
 
function abrirMenuMob(){
	divMenuH.style.height = "100%";
	divMenuH.style.width = "100%";
	divMenuH.style.backgroundColor = "#3498db";
	divMenuH.style.marginLeft = "0";
	divMenuH.style.position = "relative";
	document.body.style.overflow = "hidden";
	divMenuH.style.transitionDuration = "0.4s";
}

function menuH(){
	if(flagMenuH == 0){
		abrirMenuMob();
		flagMenuH =1;
	}else{
		fecharMenuMob();
		flagMenuH=0;
	}
}

function redm(){
	let body = window.innerWidth;
	if(body >= "600"){
		fecharMenuMob();
	}
}