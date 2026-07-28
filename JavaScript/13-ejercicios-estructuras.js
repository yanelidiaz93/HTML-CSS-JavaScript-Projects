// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "oso", "conejo", "jirafa"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("ballena")
animales.push("araña")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
libros.add("libro5").add("libro6")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("libro5")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(meses.entries())


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(meses.has(5)){
    console.log("El número de mes 5 SÍ existe y es: " + meses.get(5))
}else{
    console.log("No existe el número de mes 5")   
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"])
console.log(meses.entries())

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numeros = [1, 2, 3, 4, 5]
let setNumeros = new Set(numeros)
console.log(numeros)

let numerosMap = new Map([
    ["valores", setNumeros]
])

console.log(numerosMap)

