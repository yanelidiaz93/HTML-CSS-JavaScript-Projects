//Sets

//Declaración

let mySet = new Set()

//Inicialización
mySet = new Set(["Yaneli", "Yaneli2", "Yaneli3", "Yaneli4"])
console.log(mySet);

//Add y Delete

mySet.add("Yaneli5")
console.log(mySet)

mySet.delete("Yaneli")
console.log(mySet)

//has
console.log(mySet.has("Yaneli2"));
console.log(mySet.has("Yaneli"));

//Size
console.log(mySet.size);

//Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray);

//Convertir array a set
mySet = new Set(myArray)
console.log(mySet)

//No admite duplicados
mySet.add("Yaneli5")
mySet.add("Yaneli5")
mySet.add("Yaneli5")
mySet.add("Yaneli5")
console.log(mySet)