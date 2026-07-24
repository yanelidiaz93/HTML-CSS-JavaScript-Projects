//array

//Declaración
let miArray = []
let miArray2 = new Array()

miArray = [3]
miArray2 = new Array(3)

console.log(miArray)
console.log(miArray2)

//Inicialización
miArray = [1, 2 ,3]
miArray2 = new Array(1, 2, 3)

console.log(miArray)
console.log(miArray2)

miArray = ["Manzana", "Fresa", 1, 2]
console.log(miArray)

miArray2 = new Array(3)
miArray2[0] = "Tomas"
miArray2[1] = "Yaneli"
miArray2[2] = "Lysandro"

console.log(miArray2)

//Métodos comunes

miArray = []

//push y pop
miArray.push("Yaneli")
miArray.push("Yaneli2")
miArray.push("Yaneli3")
miArray.push("Yaneli4")
console.log(miArray)

console.log(miArray.pop())
console.log(miArray)

// shift y inshift
miArray.shift()
console.log(miArray)

miArray.unshift("Yaneli5", 123)
console.log(miArray)

//Length
console.log(miArray.length);

//Clear
miArray = []

//Slice
miArray = ["Yaneli", "Yaneli2", "Yaneli3", "Yaneli4"]
let miNuevoArray = miArray.slice(1, 2)
console.log(miArray)
console.log(miNuevoArray)

//Splice
miArray.splice(1, 2)
console.log(miArray)

miArray = ["Yaneli", "Yaneli2", "Yaneli3", "Yaneli4"]
miArray.splice(1, 2, "Nuevo elemento")
console.log(miArray)