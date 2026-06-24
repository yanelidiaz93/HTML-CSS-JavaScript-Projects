const diasEle = document.getElementById("dias");
const horasEle = document.getElementById("horas");
const minutosEle = document.getElementById("minutos");
const segundosEle = document.getElementById("segundos");
const yearEle = document.querySelector(".year");
const fechaEle = document.querySelector("#fechaActual");

const fecha = new Date();

const opciones = { 
  weekday: 'long', // Día de la semana completo (ej. "miércoles")
  year: 'numeric', // Año completo (ej. "2026")
  month: 'long',   // Mes completo (ej. "junio")
  day: 'numeric'   // Número del día (ej. "24")
};

const fechaCompleta = fecha.toLocaleDateString('es-MX', opciones);
fechaEle.innerText = fechaCompleta;

const newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

actualizarContador()
function actualizarContador(){
    const now = new Date().getTime(); //Fecha y hora exacta de nuestra computadora
    //console.log(now, newYearTime);
    const tiempoFaltante = newYearTime - now;
    //console.log(tiempoFaltante);

    //NOTA: Este tiempo se da en milisegundos, por lo que tenemos que hacer las conversiones
    const segundo = 1000; // 1 segundo tiene 1000 ms
    const minuto = segundo* 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const d = Math.floor(tiempoFaltante/dia); //Obtener un numero entero
    const h = Math.floor((tiempoFaltante%dia) / hora);
    const m = Math.floor((tiempoFaltante%hora) / minuto);
    const s = Math.floor((tiempoFaltante%minuto) / segundo);

    diasEle.innerText = d;
    horasEle.innerText = h;
    minutosEle.innerText = m;
    segundosEle.innerText = s;

    const nextYear = new Date().getFullYear() + 1;
    yearEle.innerText = nextYear;

    setTimeout(actualizarContador, 1000); //actualizar dinamicamente el contador sin tener que recargar la página manualmente
    //NOTA: Es cada 1000 ms ya que representa cada segundo 
}
