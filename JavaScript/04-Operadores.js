//Operadores

//Aritméticos
let a = 5
let b = 10

console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicación
console.log(a / b) //División

console.log(a % b) //Módulo
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)

// De asignación

let miVariable = 2
console.log(miVariable)

miVariable += 2
console.log(miVariable)

miVariable -= 2
console.log(miVariable)

miVariable *= 2
console.log(miVariable)

miVariable /= 2
console.log(miVariable)

miVariable %= 2
console.log(miVariable)

miVariable **= 2
console.log(miVariable)

//De comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a === a) //Igualdad por identidad (tipo y valor)
console.log(a === 6) //Igualdad por identidad (tipo y valor)
console.log(a === "6") //Igualdad por identidad (tipo y valor)
console.log(a != "6")
console.log(a !== "6")

//-------- Truthy values (valores verdaderos) ---------- 
	//• Todos los numeros positivos y negativos menor el cero.
	//• Todas la cadenas de texto menor las vacías.
	//• El boolean true

//-------- Falsy values (valores falsos) ---------- 
	//• 0
	//• 0n
	//• Null
	//• Undefined
	//• NaN
	//• El boolean false
    //• Cadenas de texto vacías.

//Lógicos

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 > 10 || 15 < 20)

//not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")


