let button = document.querySelector('#button');
    button.addEventListener("click",(e)=>{
if (button.style.borderStyle != "solid") {
    button.style.border = "solid yellow 5px"; 
} else {
    button.style.removeProperty("border");
}
});



    // document.getElementById("btn-one").addEventListener("click", function(){
    //     var quantity = document.querySelector('#input-one').value; 
    //     var quantity = document.querySelector('#input-two').value; 
    //     var quantity = document.querySelector('#input-three').value;           
    //     document.querySelector('.tot').innerHTML=quantity;
    //     document.querySelector('.cant').innerHTML=quantity;
    //     });
