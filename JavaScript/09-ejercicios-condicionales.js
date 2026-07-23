// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Yaneli"
if(nombre == "Yaneli"){
    console.log("El nombre es: " + nombre);
    
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Yaneli"
let password = 123456

if(usuario == "Yaneli" && password == 123456){
    console.log("Login realizado correctamente");
}else {
    console.log("Login incorrecto");
    
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -2

if(numero > 0){
    console.log(`El número ${numero} es positivo`);
}else if(numero < 0){
    console.log(`El número ${numero} es negativo`);
}else {
    console.log(`El número es cero`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 9
if(edad >= 18){
    console.log("Puede votar");
    
}else{
    console.log(`No puede votar. Le faltan ${18 - edad} años`); 
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const a = edad >=18 ? "adulto" : "menor"
console.log(a);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 10
let estacion

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno"
}else if (3>=mes<=5){
    estacion = "Primavera"
}else if(6>=mes<=8){
    estacion = "Verano"
}else if(9>=mes<=11){
    estacion = "Otoño"
}else{
    estacion = "Número de mes no válido"
}

console.log(estacion);


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

let dias

switch(mes){
    case 1:
        dias = "31 días"
        break
    case 2:
        dias = "28 días"
        break
    case 3:
        dias = "31 días"
        break
    case 4:
        dias = "30 días"
        break
    case 5:
        dias = "31 días"
        break
    case 6:
        dias = "30 días"
        break
    case 7:
        dias = "31 días"
        break
    case 8:
        dias = "30 días"
        break
    case 9:
        dias = "31 días"
        break
    case 10:
        dias = "31 días"
        break
    case 11:
        dias = "30 días"
        break
    case 12:
        dias = "31 días"
        break
    default:
        dias = "Número de mes no válido"
}

console.log(dias);


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Francés"
let saludo

switch(idioma){
    case "Español":
        saludo = "Hola!"
        break
    case "Inglés":
        saludo = "Hello!"
        break    
    case "Francés":
        saludo = "Bonjour!"
        break
}

console.log(saludo);


// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case 1:
    case 2:
    case 12:
        estacion = "Invierno"
        break
    case 3:
    case 4: 
    case 5:
        estacion = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "Verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "Otoño"
        break
    default:
        estacion = "Número de mes no válido"
}

console.log(estacion);