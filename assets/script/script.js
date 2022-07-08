let button = document.querySelector('#button');
    button.addEventListener("click",(e)=>{
if (button.style.borderStyle != "solid") {
    button.style.border = "solid yellow 5px"; 
} else {
    button.style.removeProperty("border");
}
});
/***************
 Desafio dos ***********/

