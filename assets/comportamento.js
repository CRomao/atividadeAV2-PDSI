var textarea = document.querySelector(".text-calc");
vetOperacoes = new Array(4);
vetOperacoes[0] = document.querySelector("#add");
vetOperacoes[1] = document.querySelector("#mult");
vetOperacoes[2] = document.querySelector("#sub");
vetOperacoes[3] = document.querySelector("#div");
var flagMenuMob = 0;
var flagOpeNegat = 0;
var menuMob = document.querySelector(".menuMob");
var contOperacao = 0;
vetBarraMenuHamb = new Array(3);
vetBarraMenuHamb[0] = document.querySelector(".barra1");
vetBarraMenuHamb[1] = document.querySelector(".barra2");
vetBarraMenuHamb[2] = document.querySelector(".barra3");

function insert(num){
	if(num == '*' || num == '/' || num == '+' || num == '-'){
		if(num == '-' && flagOpeNegat == 0){
			flagOpeNegat += 1;
		}
		if(contOperacao < 1 || (flagOpeNegat == 1 && contOperacao <=1)){
			textarea.innerHTML = textarea.innerHTML+num;
			contOperacao += 1;
		}
	}else{
		textarea.innerHTML = textarea.innerHTML+num;
	}
}

function clean(){
	textarea.innerHTML = "";
	contOperacao = 0;
	flagOpeNegat = 0;
	for (let i = 0; i < vetOperacoes.length; i++) {
		vetOperacoes[i].style.backgroundColor = "#7f8c8d";
	}
}

function disableButton(){
	if((flagOpeNegat == 1 && contOperacao == 2) ||(flagOpeNegat <1 & contOperacao ==1) || (flagOpeNegat ==0 && contOperacao ==1)){
		for (var i = 0; i < vetOperacoes.length; i++) {
			vetOperacoes[i].style.backgroundColor = "#b2bec3";
			vetOperacoes[i].style.disable = true;
		}
	}
}

function result(){
	textarea.innerHTML = eval(textarea.innerHTML);
	if(textarea.innerHTML == "undefined"){
		textarea.innerHTML = "";
	}else if(textarea.innerHTML == "NaN"){
		textarea.innerHTML = "indeterminado";
	}else if(textarea.innerHTML == "Infinity"){
		textarea.innerHTML = "impossível";
	}
}

function fecharMenuMob(){
	menuMob.style.height = "0";
	menuMob.style.width = "0";
	menuMob.style.marginLeft = "-180%";
	document.body.style.overflow = "visible";

	for (let i =0; i >vetBarraMenuHamb.length; i++) {
		vetBarraMenuHamb[i].style.transform = "rotate(-180deg)";
		vetBarraMenuHamb[i].style.marginBottom = "6px";
		vetBarraMenuHamb[i].style.marginLeft = "0px";
		vetBarraMenuHamb[i].style.backgroundColor = "white";
		vetBarraMenuHamb[i].style.transitionDuration = "0.4s";
		vetBarraMenuHamb[i].style.height = "15%";
		vetBarraMenuHamb[i].style.width = "100%";
	}
}

 
function abrirMenuMob(){
	menuMob.style.height = "100%";
	menuMob.style.width = "100%";
	menuMob.style.backgroundColor = "#3498db";
	menuMob.style.marginLeft = "0";
	menuMob.style.position = "relative";
	document.body.style.overflow = "hidden";
	menuMob.style.transitionDuration = "0.4s";

	for (let i =0; i >vetBarraMenuHamb.length; i++) {
		vetBarraMenuHamb[i].style.transform = "rotate(180deg)";
		vetBarraMenuHamb[i].style.marginBottom = "0px";
		vetBarraMenuHamb[i].style.marginLeft = "4px";
		vetBarraMenuHamb[i].style.backgroundColor = "#2c3e50";
		vetBarraMenuHamb[i].style.transitionDuration = "0.4s";
		vetBarraMenuHamb[i].style.height = "100%";
		vetBarraMenuHamb[i].style.width = "15%";
	}
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