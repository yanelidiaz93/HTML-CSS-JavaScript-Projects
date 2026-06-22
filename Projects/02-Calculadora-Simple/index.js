const buttonsEle = document.querySelectorAll("button");
const input = document.getElementById("result");
//console.log(buttonsEle);

//For para agregar un evento a cada botón de la calculadora
for(let i = 0; i < buttonsEle.length; i++){
    buttonsEle[i].addEventListener("click", ()=>{
        //console.log(buttonsEle[i].textContent);
        const buttonValue = buttonsEle[i].textContent;

        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else if(buttonValue === "D"){
            deleteNumber();
        }else{
            appendValue(buttonValue);
        }
    })
}

function clearResult(){
    input.value = "";
}

function calculateResult(){
    //eval recibe una cadena de texto como argumento y procesa ese texto como expresión matemática 
    input.value = eval(input.value);
}

function appendValue(buttonValue){
    input.value += buttonValue; //Concatenación de los numeros
}

//Eliminar el último número
function deleteNumber(){
    input.value = input.value.slice(0,-1);
}