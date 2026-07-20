//--------- TIPOS DE DATOSPRIMITIVOS -------------

//1. String (cadena de texto)
let name = "Yaneli"
let alias = "Yan"
let email = 'yanelidiaz93@gmail.com'

//2. Number (números)
let edad = 22 //Entero
let altura = 1.65 //Decimal

//3. Boolean (booleanos)
let esEstudiante = true
let esProfesor = false

//4. Undefined
let undefinedValue
//console.log(undefinedValue);

//5. Null
let nullValue = null

//6. Symbol
let mySymbol = Symbol("mysymbol")

//7. BigInt
let myBigInt = BigInt(12345678909876543211234567890987654321234567890987654322345678987654321234567890) //Una forma de declarar
let myBigInt2 = 12345678909876543211234567890987654321234567890987654322345678987654321234567890n //Otra forma de declarar

//Mostrar los tipos dee datos
console.log(typeof name);

console.log(typeof edad);
console.log(typeof altura);

console.log(typeof esEstudiante);
console.log(typeof esProfesor);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);