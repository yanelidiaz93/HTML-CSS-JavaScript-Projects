//Funciones

//Simple
function myFunction(){
    console.log("Hola función");
}

myFunction()

//Con parámetros
function myFunctionParams(name){
    console.log(`Hola ${name}`);
}

myFunctionParams("Yaneli")

const myFunction2 = function(name){
    console.log(`Hola ${name}`);
}

myFunction2("Tomas")

//Arrow functions

const myFunction3 = (name) => {
    console.log(`Hola ${name}`);
}

const myFunction4 = (name) => console.log(`Hola ${name}`);

myFunction3("Función 3")
myFunction4("Función 4")

//Parámetros
function sum(a, b){
    console.log(a + b)
}

sum(5, 5)
sum(5)
sum()

//Valores por defecto
function defaultsum(a = 0, b = 0){
    console.log(a + b)
}

defaultsum()
defaultsum(5)
defaultsum(5, 10)
defaultsum(b = 5)

//Retorno de valores
function mult(a, b){
    return a * b
}

console.log(mult(5, 5))

//Funciones anidadas
function extern(){
    console.log("Función externa")
    function intern(){
        console.log("Función interna") 
    }
    intern()
}

extern()

//Funciones de orden superior

function superiorFunc(func, param){
    func(param)
}

superiorFunc(myFunction4, "Orden superior")

// forEach

miArray = [1, 2 ,3, 4]

mySet = new Set(["Yaneli", "Yaneli2", "Yaneli3", "Yaneli4"])

myMap = new Map([
    ["name", "Yaneli"],
    ["email", "yaneli@gmail.com"],
    ["edad", 22]
])
miArray.forEach((value) => console.log(value))
miArray.forEach(function (value){
    console.log(value)
})

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))