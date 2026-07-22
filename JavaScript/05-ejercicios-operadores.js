// 1. Crea una variable para cada operación aritmética

let suma = 10 + 10
let resta = 5 - 2
let multiplicacion = 30 * 2
let division = 10 / 3
let modulo = 10 % 2
let exponente = 2 ** 2
let incremento = 1
incremento++
let decremento = 2
decremento--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion1 = suma

let asignacion2 = 1
asignacion2 += resta

let asignacion3 = 2
asignacion3 -= multiplicacion

let asignacion4 = 3
asignacion4 *= division

let asignacion5 = 4
asignacion5 /= modulo

let asignacion6 = 5
asignacion6 %= exponente

let asignacion7 = 6
asignacion7 **= incremento

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(100 >= 12)
console.log(100 > 12)
console.log(100 != 12)
console.log(100 == "100")
console.log(100 === 100)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(2 >= 12)
console.log(100 < 12)
console.log(100 != 100)
console.log(100 === "100")
console.log(100 == 10)

// 5. Utiliza el operador lógico and

console.log(100 > 12 && "hola" === "hola")


// 6. Utiliza el operador lógico or

console.log(140 >= 12 || "hola" !== "hola" || 90 == 120)


// 7. Combina ambos operadores lógicos

console.log(100 > 12 && 80 == 90 || 30 < 12)


// 8. Añade alguna negación

console.log(100 > 12 && 80 == 90 || !(30 < 12))

// 9. Utiliza el operador ternario

10 > 1 ? console.log("Es Mayor") : console.log("No es mayor")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((10*2)>= 20 && !(150/5 == 30))
