const inputEle = document.getElementById("input");
const errorEle = document.getElementById("error");
const resultEle = document.getElementById("resultado");

let errorTime;
let resultTime;

function actualizarRes(){
    if(inputEle.value <= 0 || isNaN(inputEle.value)){
        errorEle.innerText = "Introduzca un número válido";
        clearTimeout(errorTime); //Evitar superposiciones del tiempo
        errorTime = setTimeout(() => {
            errorEle.innerText = "";
            inputEle.value = "";
        },2000); 
    }else{
        resultEle.innerText = (inputEle.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEle.innerText = "";
            inputEle.value = "";
        }, 10000);
    }
}

inputEle.addEventListener("input", actualizarRes);