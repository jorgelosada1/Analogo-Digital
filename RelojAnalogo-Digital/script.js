const deg = 6;

const horas  = document.querySelector('.hora');
const minutos  = document.querySelector('.minuto');
const segundos  = document.querySelector('.segundo');


setInterval(()=>{
    let tiempo = new Date();

    let hr = tiempo.getHours() *30;
    let min = tiempo.getMinutes() *deg;   
    let seg = tiempo.getSeconds() *deg;  
    
    horas.style.transform = `rotate(${hr + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;

 
})


function calcularTiempo(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    // Convertir a formato de 12 horas
    let ampm = hora >= 12 ? 'PM' : 'AM';
    hora = hora % 12;
    hora = hora ? hora : 12; // Si hora es 0, establece 12

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let pantallaReloj = hora + ":" + minutos + ":" + segundos + " " + ampm;
    let relojDigital = document.querySelector(".digital");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);
