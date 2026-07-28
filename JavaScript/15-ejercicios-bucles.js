// 1. Crea un bucle que imprima los números del 1 al 20
console.log("-------- EJERCICIO 1 ---------")
for(let i = 0; i < 20; i++){
    console.log(i+1)   
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("-------- EJERCICIO 2 ---------")
let suma = 0
for(let i = 1; i<=100; i++){
    suma = suma + i
}
console.log(`Resultado de la suma: ${suma}`)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("-------- EJERCICIO 3 ---------")
let i = 1
while(i <= 50){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("-------- EJERCICIO 4 ---------")
let nombres = ["Yaneli", "Maricela", "Santiago", "Tomas", "Jhoel"]
for(let nombre of nombres){
    console.log(nombre)   
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("-------- EJERCICIO 5 ---------")
let vocales = ['a', 'e', 'i', 'o', 'u']
let myString = "Hola, JavaScript"
let contador = 0

 for(let letra of myString){
    if(vocales.includes(letra.toLowerCase())){
        contador++
    }
 }
 console.log(`Número de vocales: ${contador}`)
 

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("-------- EJERCICIO 6 ---------")
let numeros = [1, 2, 3, 4, 5]
let producto = 1

for(let numero of numeros){
    producto = producto * numero
}
console.log(`Resultado de la multiplicación: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("-------- EJERCICIO 7 ---------")
i=1
while(i<=10){
    console.log(`5 * ${i} = ${5*i}`)
    i++   
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("-------- EJERCICIO 8 ---------")
let cadena = "Hola"
let newCadena = ""
for(let letra of cadena){
    newCadena = letra + newCadena
}
console.log(newCadena)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("-------- EJERCICIO 9 ---------")
let primero = 0
let segundo = 1
for(i = 0; i < 10; i++){
     console.log(primero)
    serie = primero + segundo
    primero = segundo
    segundo = serie
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("-------- EJERCICIO 10 ---------")

let numerosArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
let nuevoArray = []
for(let numero of numerosArray){
    if(numero > 10){
        nuevoArray.push(numero)
    }
}

console.log(nuevoArray)
