//Strings

//Concatenación
let miNombre = "Yaneli"
let saludo = "Hola, " + miNombre + "!"
console.log(saludo)

//Longitud
console.log(saludo.length)

//Acceso a caracteres
console.log(saludo[0])
console.log(saludo[1])

//Métodos comunes
console.log(saludo.toUpperCase()) //Mayúsculas
console.log(saludo.toLowerCase()) //Minúsculas
console.log(saludo.indexOf("Yaneli")) //Índice donde se ha encontrado "Yaneli"
console.log(saludo.includes("Hola")) //Identificar si existe en la cadena
console.log(saludo.slice(0, 3))//Regresa solo una sección entre un intervalo de índices
console.log(saludo.replace("Yaneli", "Lysandro")) //Reemplazar un parámetro por otro

//Template literals (platillas literares)
let mensaje = `Hola, 
mensaje escrito en dos líneas`
console.log(mensaje)

let edad = 22

console.log(`Hola, ${miNombre}! Tu edad es ${edad}`)

