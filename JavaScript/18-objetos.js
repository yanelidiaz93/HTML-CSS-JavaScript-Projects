//Objetos

//Sintaxis
let person ={
    name: "Yaneli",
    age: 22,
    alias: "Yan"
}

//Acceso a propiedades

//Notación punto
console.log(person.name);

//Notación corchetes
console.log(person["name"]);

//Modificación de propiedades
person.name = "Yaneli Díaz"
console.log(person.name);

person.age = "22"
console.log(person.age);

//Eliminación de propiedades
delete person.age
console.log(person);

//Nueva propiedad
person.email = "yaneli@gmail.com"
person["age"] = 22
console.log(person);

//Métodos (funciones)

let person2 ={
    name: "Yaneli",
    age: 22,
    alias: "Yan",
    walk: function () {
        console.log("La persona camina")
    }
}

person2.walk()

//Anidación de objetos

let person3 ={
    name: "Yaneli",
    age: 22,
    alias: "Yan",
    walk: function () {
        console.log("La persona camina")
    },
    job:{
        name: "Programador",
        exp: 5,
        work: function () {
            console.log(`La ${this.name} persona trabaja"`)
        }
    }
}

console.log(person3);
console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work()

//Igualdad de objetos

let person4 ={
    name: "Yaneli Díaz",
    alias: "Yan",
    age: 22,
    email: "yaneli@gmail.com"
}

//NOTA: Da false porque no se compara el valor, sino la dirección de memoria que es donde se almacena el objeto
console.log(person == person4)
console.log(person === person4)

console.log(person.name === person4.name)

//Iteración
for(let key in person){ //Se accede a las claves
    console.log(key + ": " + person[key]); 
}

//Funciones como objetos

//Constructor: Objeto que puede llegar a ser útil cuando se quiere crear múltiples instancias
function Person(name, age){ //Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Yaneli", 22)
console.log(person5);
