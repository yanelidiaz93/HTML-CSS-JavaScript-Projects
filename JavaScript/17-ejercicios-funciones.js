// 1. Crea una función que reciba dos números y devuelva su suma

const suma = (a, b) => console.log(`Suma: ${a + b}`)
suma(10, 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numeros = [1, 2 ,3 ,4 ,5, 4, 10]
let mayor = 0
numeros.forEach(function (value){
    if(value > mayor){
        mayor = value
    }
    return mayor
})
console.log(`El número mayor es: ${mayor}`)  

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocales(cadena){
    let vocales = ['a', 'e', 'i', 'o', 'u']
    let contador = 0
    for(let letra of cadena){
        if(vocales.includes(letra.toLowerCase())){
            contador++
        }
    }
    console.log(`Cantidad de vocales: ${contador}` ) 
}

vocales("Hola Mundo")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let array = ["manzana", "pera", "platano"]
 let newArray = []

array.forEach(function(value){
    newArray.push(value.toUpperCase())
})
console.log(newArray)


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false;
    
    if (numero === 2) return true;
    
    if (numero % 2 === 0) return false;
    
    const raiz = Math.sqrt(numero);
    for (let i = 3; i <= raiz; i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(4))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3 ,4, 5, 'a', 'b']
let array2 = [2, 7, 9, 'f', 'a', 1, 'b']
let arrayFinal = []

function similitudes(array1, array2){
    for(let x of array1){
        for(let y of array2){
            if(x === y){
                arrayFinal.push(x)
            }
        }
    }

    console.log(arrayFinal);
}
similitudes(array1, array2)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let sumaPares = 0
numeros.forEach(function(value){
    if(value % 2 == 0 ){
        sumaPares = sumaPares + value
    }
})

console.log(`La suma es: ${sumaPares}`)


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const cuadrado = (array) => {
    let nuevoArray = []
    for(let value of numeros){
        nuevoArray.push(value ** 2)
    }

    return nuevoArray
}

console.log(cuadrado(numeros))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function inversor(cadena) {
    return cadena.split(' ').reverse().join(' ')
    /* NOTAS:
        split: Rompe la cadena de texto cada que se encuentra un espacio y la convierte en un arreglo de palabras
        reverse: Voltea el orden de los elementos de dicho arreglo.
        join: Une todos los elementos del arreglo en una cadena de texto.
    */
}

console.log(inversor("Hola JavaScript"))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
    let factorial = 1
    for(let i = 1; i <= numero ; i++){
        factorial = factorial * i
    }
    return `El factoria de ${numero} es: ${factorial}`
}

console.log(factorial(10))
