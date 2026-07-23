//Condicionales

//if, else if, else

//if

let edad = 22

if(edad == 22){
    //Bloque de código a ejecutar
    console.log("La edad es 22");
}

//else

if(edad == 22){
    //Bloque de código a ejecutar
    console.log("La edad es 22");
}else {
    console.log("La edad NO es 22");
}

//else if

if(edad == 22){
    //Bloque de código a ejecutar
    console.log("La edad es 22");
}else if(edad < 18){
    console.log("Es menor de edad");
}else {
    console.log("La edad NO es 22");
    
}

//Operador ternario

const mensaje = edad == 22 ? "La edad es 22" : "La edad NO es 22"
console.log(mensaje);

// switch

let dia = 0
let nombreDia

switch(dia){
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3: 
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5: 
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Número de día no válido"
}

console.log(nombreDia);
