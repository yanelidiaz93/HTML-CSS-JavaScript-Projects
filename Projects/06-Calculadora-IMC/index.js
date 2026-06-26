const btnEle = document.getElementById("btn");
const alturaEle = document.getElementById("altura");
const pesoEle = document.getElementById("peso");
const resultEle = document.getElementById("imc-result");
const condicionEle = document.getElementById("condicion-peso");

function calcularIMC(){
    let a = alturaEle.value / 100;
    let p = pesoEle.value;
    let r = 0;

    r  = p/(a * a);
    resultEle.value = r.toFixed(5);

    if(r < 18.5){
        condicionEle.innerText = "Bajo peso";
    }else if(r >= 18.5 && r <= 24.9){
        condicionEle.innerText = "Peso saludable";
    }else if(r >=25 && r <= 29.9){
        condicionEle.innerText = "Sobrepeso";
    }else if(r >= 30){
        condicionEle.innerText = "Obesidad";
    }
}

btnEle.addEventListener("click", calcularIMC);