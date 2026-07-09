const horasEle = document.querySelector(".horas");
const minutosEle = document.querySelector(".minutos");
const segundosEle = document.querySelector(".segundos");


function updateReloj(){
    const horaActual = new Date();
    setTimeout(updateReloj, 1000);
    const hora = horaActual.getHours();
    const minuto = horaActual.getMinutes();
    const segundo = horaActual.getSeconds();

    //Convertir horas a grados
    const horaDeg = (hora / 12) * 360;
    horasEle.style.transform = `rotate(${horaDeg}deg)`;

    const minutoDeg = (minuto / 60) * 360;
    minutosEle.style.transform = `rotate(${minutoDeg}deg)`;

    const segundoDeg = (segundo / 60) * 360;
    segundosEle.style.transform = `rotate(${segundoDeg}deg)`;
}

updateReloj();