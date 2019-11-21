var textarea = document.querySelector(".text-calc");
vetOperacoes = new Array(4);
vetOperacoes[0] = document.querySelector("#add");
vetOperacoes[1] = document.querySelector("#mult");
vetOperacoes[2] = document.querySelector("#sub");
vetOperacoes[3] = document.querySelector("#div");
var flagMenuMob = 0;
var menuMob = document.querySelector(".menuMob");
var contOperacao = 0;
var barraMenuHamb1 = document.querySelector(".barra1");
var barraMenuHamb2 = document.querySelector(".barra2");
var barraMenuHamb3 = document.querySelector(".barra3");

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
	menuMob.style.height = "0";
	menuMob.style.width = "0";
	menuMob.style.marginLeft = "-180%";
	document.body.style.overflow = "visible";

	barraMenuHamb1.style.transform = "rotate(-180deg)";
	barraMenuHamb1.style.marginBottom = "6px";
	barraMenuHamb1.style.marginLeft = "0px";
	barraMenuHamb1.style.backgroundColor = "white";
	barraMenuHamb1.style.transitionDuration = "0.4s";
	barraMenuHamb1.style.height = "15%";
	barraMenuHamb1.style.width = "100%";

	barraMenuHamb2.style.transform = "rotate(-180deg)";
	barraMenuHamb2.style.marginBottom = "6px";
	barraMenuHamb2.style.marginLeft = "0px";
	barraMenuHamb2.style.backgroundColor = "white";
	barraMenuHamb2.style.transitionDuration = "0.4s";
	barraMenuHamb2.style.height = "15%";
	barraMenuHamb2.style.width = "100%";

	barraMenuHamb3.style.transform = "rotate(-180deg)";
	barraMenuHamb3.style.marginBottom = "6px";
	barraMenuHamb3.style.marginLeft = "0px";
	barraMenuHamb3.style.backgroundColor = "white";
	barraMenuHamb3.style.transitionDuration = "0.4s";
	barraMenuHamb3.style.height = "15%";
	barraMenuHamb3.style.width = "100%";
}

 
function abrirMenuMob(){
	menuMob.style.height = "100%";
	menuMob.style.width = "100%";
	menuMob.style.backgroundColor = "#3498db";
	menuMob.style.marginLeft = "0";
	menuMob.style.position = "relative";
	document.body.style.overflow = "hidden";
	menuMob.style.transitionDuration = "0.4s";

	barraMenuHamb1.style.transform = "rotate(180deg)";
	barraMenuHamb1.style.marginBottom = "0px";
	barraMenuHamb1.style.marginLeft = "4px";
	barraMenuHamb1.style.backgroundColor = "#2c3e50";
	barraMenuHamb1.style.transitionDuration = "0.4s";
	barraMenuHamb1.style.height = "100%";
	barraMenuHamb1.style.width = "15%";

	barraMenuHamb2.style.transform = "rotate(180deg)";
	barraMenuHamb2.style.marginBottom = "0px";
	barraMenuHamb2.style.marginLeft = "4px";
	barraMenuHamb2.style.backgroundColor = "#2c3e50";
	barraMenuHamb2.style.transitionDuration = "0.4s";
	barraMenuHamb2.style.height = "100%";
	barraMenuHamb2.style.width = "15%";

	barraMenuHamb3.style.transform = "rotate(180deg)";
	barraMenuHamb3.style.marginBottom = "0px";
	barraMenuHamb3.style.marginLeft = "4px";
	barraMenuHamb3.style.backgroundColor = "#2c3e50";
	barraMenuHamb3.style.transitionDuration = "0.4s";
	barraMenuHamb3.style.height = "100%";
	barraMenuHamb3.style.width = "15%";
}

function menuMobOp(){
	if(flagMenuMob == 0){
		abrirMenuMob();
		flagMenuMob =1;
	}else{
		fecharMenuMob();
		flagMenuMob=0;
	}
}

function redm(){
	let body = window.innerWidth;
	if(body >= "480"){
		fecharMenuMob();
	}
}