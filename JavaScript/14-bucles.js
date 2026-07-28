//Loops o bucles

//for
console.log("-------- FOR ---------")
for(let i = 0; i < 5; i++){
    console.log("Hola")
}

const numeros = [1, 2, 3, 4, 5]

for(let i = 0; i < numeros.length; i++){
    console.log(`Elemento: ${numeros[i]}`)
}

//while
console.log("-------- WHILE ---------")
let i = 0
while(i < 5){
    console.log(`Hola ${i}`)
    i++
}

//do while
console.log("-------- DO WHILE ---------")

i = 6
do{
    console.log(`Hola ${i}`)
    i++
}while(i < 5)

//for of
console.log("-------- FOR OF ---------")
miArray = [1, 2 ,3]

mySet = new Set(["Yaneli", "Yaneli2", "Yaneli3", "Yaneli4"])

myMap = new Map([
    ["name", "Yaneli"],
    ["email", "yaneli@gmail.com"],
    ["edad", 22]
])

let myString = "¡Hola, JavaScript!"

console.log("--Array--")

for(let valor of miArray){
    console.log(valor)
    
}

console.log("--Set--")

for(let valor of mySet){
    console.log(valor)
    
}

console.log("--Map--")

for(let valor of myMap){
    console.log(valor)
    
}

// console.log("--String--")

// for(let valor of myString){
//     console.log(valor)
    
// }

//break y continue
console.log("-------- CONTINUE ---------")
for(let i = 0; i < 10; i++){
    if(i == 5){
        continue
    }
    console.log(`Hola ${i}`)
}

console.log("-------- BREAK ---------")
for(let i = 0; i < 10; i++){
    if(i == 5){
        continue
    }else if(i == 6){
        break
    }
    console.log(`Hola ${i}`)
}