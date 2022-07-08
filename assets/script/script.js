let button = document.querySelector('#button');
    button.addEventListener("click", () => {
if (button.style.borderStyle != "solid") {
    button.style.border = "solid red 2px"; 
} else {
    button.style.removeProperty("border");
}
});
/***************
 Desafio dos ***********/

let btn = document.querySelector('#btn-one');
let msj = document.querySelector ('#msj');
    btn.addEventListener("click", (e) => {
quantity = Number(document.querySelector("#input-one").value) +
        Number (document.querySelector("#input-two").value) +
        Number (document.querySelector("#input-three").value);

if (quantity == 0) {
msj.innerHTML="=== No Seleccionaste Stickers ===";
msj.setAttribute('style', 'background-color: blue')
} else if (quantity >10){
msj.innerHTML="Llevas Demasiados Stickers!!";
msj.setAttribute('style', 'background-color: red')
} else {
msj.innerHTML=`Llevas ${quantity} Stickers`;
msj.setAttribute('style', 'background-color: green',)
}
});
/***************
 Desafio tres ***********/

let btnTwo = document.querySelector('#btn-two');
let psw = document.querySelector ('#psw');
    btnTwo.addEventListener("click", () => {
passw = Number(document.querySelector("#num-one").value + 
document.querySelector("#num-two").value +
document.querySelector("#num-three").value);
if (passw == "911") {
psw.innerHTML="Password 1 Correcto";
psw.setAttribute('style', 'background-color: green');
} else if (passw == "714") {
psw.innerHTML="Password 2 Correcto";
psw.setAttribute('style', 'background-color: green');
} else {
psw.innerHTML="Password Incorrecto";
psw.setAttribute('style', 'background-color: red')
}
});