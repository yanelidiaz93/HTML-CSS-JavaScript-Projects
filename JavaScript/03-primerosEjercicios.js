// 1. Escribe un comentario en una línea
//Comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Comentarios
En
Varias
Líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string = "Hola! Ejercicios"
let numberEntero = 22
let numberDecimal = 1.65
let boolean = false
let undefinedValue
let nullValue = null
let mySymbol = Symbol("JS")
let bigIntValue = 1234567890987654321234567890n

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(numberEntero);
console.log(numberDecimal);
console.log(boolean);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(bigIntValue);
console.log("-------------------------------------------------");


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string);
console.log(typeof numberEntero);
console.log(typeof numberDecimal);
console.log(typeof boolean);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof bigIntValue);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

string = "Hola! Cambio"
numberEntero = 100
numberDecimal = 0.1
boolean = true
mySymbol = Symbol("CSS")
bigIntValue = BigInt(234567899876678987654321223456789098765432)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 1234567890987654321234567890n
numberEntero = Symbol("HTML")
numberDecimal = null
boolean
undefinedValue = true
nullValue = 1.23
mySymbol = 123
bigIntValue = "Holaaaaa"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const string2 = "Hola! Constantes"
const numberEntero2 = 22
const numberDecimal2 = 1.65
const boolean2 = false
//const undefinedValue2
const nullValue2 = null
const mySymbol2 = Symbol("JS")
const bigIntValue2 = 1234567890987654321234567890n

// 9. A continuación, modifica los valores de las constantes
//string2 = "Hola! Constantes 2"
//numberEntero2 = 23
//numberDecimal2 = 1.64
//boolean2 = true
//nullValue2 = null
//mySymbol2 = Symbol("JS2")
//bigIntValue2 = 1234567890987634554321234567890n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse