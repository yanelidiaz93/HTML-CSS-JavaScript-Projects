/*Link API: https://www.exchangerate-api.com/
  NOTA: Generar su propia clave ya que tiene un limite de usos
*/
const primeraMonedaEle = document.getElementById("primera-moneda");
const primerValorEle = document.getElementById("primer-valor");

const segundaMonedaEle = document.getElementById("segunda-moneda");
const segundoValorEle = document.getElementById("segundo-valor");

const cambioMonedaEle = document.getElementById("tipo-cambio");

updateRate(); //Cargar la función al visitar por primera vez para que el parráfo tenga contenido

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/0322a81ea6c33491f0ef470b/latest/${primeraMonedaEle.value}`)
    .then((res)=>res.json()) //Convertir respuest al formato JSON para usar los datos
    .then((data)=>{
        const rate = data.conversion_rates[segundaMonedaEle.value];
        //console.log(rate);
        cambioMonedaEle.innerText =`1 ${primeraMonedaEle.value} = ${rate + " " + segundaMonedaEle.value}`;

        segundoValorEle.value = (primerValorEle.value * rate).toFixed(3);// toFixed establece la cantidad de decimales
    });
}

primeraMonedaEle.addEventListener("change", updateRate);
segundaMonedaEle.addEventListener("change", updateRate);

primerValorEle.addEventListener("input", updateRate);