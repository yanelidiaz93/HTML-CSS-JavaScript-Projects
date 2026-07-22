// 1. Concatena dos cadenas de texto
let cadena = "Hola" + " Mundo!"
console.log(cadena)

// 2. Muestra la longitud de una cadena de texto
console.log("La longitud es: " + cadena.length)

// 3. Muestra el primer y último carácter de un string

console.log("Primer carácter: "+cadena[0])
console.log("Último carácter: " + cadena[cadena.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log("Mayúsculas: "+ cadena.toUpperCase())
console.log("Minúsculas: "+ cadena.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadena2 = `Hola,
 Mundo, en
 varias 
 líneas`

console.log(cadena2)
 
// 6. Interpola el valor de una variable en un string
let nombre = "Yaneli"
let edad = 22
let ocupacion = "estudiante"

console.log(`Hola, me llamo ${nombre}, soy ${ocupacion} y tengo ${edad} años`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena3 = `Hola, me llamo ${nombre}, soy ${ocupacion} y tengo ${edad} años`
console.log(cadena3.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena.includes("Mundo"))

// 9. Comprueba si dos strings son iguales

console.log(cadena === cadena2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena.length == cadena2.length)