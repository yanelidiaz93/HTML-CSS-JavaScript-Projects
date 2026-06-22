const btnEle = document.querySelector(".btn");
const inputEle= document.getElementById("input");

const copyIcon = document.querySelector(".fa-copy");

const alertContainerEle = document.querySelector(".alert-container");

btnEle.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
        if(inputEle.value){
        alertContainerEle.classList.remove("active");
        setTimeout(()=>{
            alertContainerEle.classList.add("active");
        }, 2000);
    }
});

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor( Math.random() * chars.length); //Redondear al entero más cercano
        password += chars.substring(randomNum, randomNum + 1); //Extraer un caracter en particular de la cadena
        // [donde esta (pisición), donde termina] --> el cero esta en la posición 0 y termina en la 1, la a está enlaposición 10 y termina en la 11

        //console.log(randomNum, password);
    }

    inputEle.value = password;
    alertContainerEle.innerText = password + " copied!";
}

function copyPassword(){
    //---Seleccionar el texto---
    inputEle.select(); //Para computadoreas
    inputEle.setSelectionRange(0,9999); //Para dispositivos móviles
    
    //--Copiar el texto--
    navigator.clipboard.writeText(inputEle.value);

}