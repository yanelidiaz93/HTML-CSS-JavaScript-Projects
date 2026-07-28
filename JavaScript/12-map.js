//map

//Declaracón
let myMap = new Map()
console.log(myMap);

//Inicialización
myMap = new Map([
    ["name", "Yaneli"],
    ["email", "yaneli@gmail.com"],
    ["edad", 22]
])
console.log(myMap);

//Métodos y propiedades
//---set---
//Agregar
myMap.set("alias", "Yane")
console.log(myMap);

//Actualizar
myMap.set("name", "Yaneli Diaz")
console.log(myMap);

//get
console.log(myMap.get("name")); //Yaneli Diaz

//has
console.log(myMap.has("name")); //true
console.log(myMap.has("lastname")); //false

//keys
console.log(myMap.keys());

//values
console.log(myMap.values());

//size
console.log(myMap.size);

//entries
console.log(myMap.entries());


//delete
myMap.delete("email")
console.log(myMap);

//clear
myMap.clear()
console.log(myMap);