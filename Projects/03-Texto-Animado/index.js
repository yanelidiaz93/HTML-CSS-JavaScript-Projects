const containerEle = document.querySelector(".container");

const texto = ["Yaneli", "Estudiante de ingeniería en Sistemas", "Técnico en mecatrónica", 
    "Apréndiz de desarrollo web"];

let textoIndex = 0;
let caracterIndex = 0; //Campurar el primer caracter y determinar cuando usar un conector

updateText();

function updateText(){
    caracterIndex++;
    containerEle.innerHTML = `
        <h1 class="font">Soy ${texto[textoIndex].slice(0,1) === "E" || texto[textoIndex].slice(0,1) === "A"? "una" : ""} ${texto[textoIndex].slice(0,caracterIndex)}</h1>
    `;
    if(caracterIndex === texto[textoIndex].length){
        textoIndex++;
        caracterIndex = 0;
    }

    if(textoIndex === texto.length){
        textoIndex = 0;
    }
    setTimeout(updateText, 400); //Va llamando la función cada 400 ms para dar el efecto de escrituta
}