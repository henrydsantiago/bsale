
var body = document.querySelector('#body');
var boton = document.querySelector('#boton');
var tabladatos =  document.querySelector('#tabla');
var informacion =  document.querySelector('#infowheater');
var principal =  document.querySelector('#sect-principal');

var cors= 'https://cors-anywhere.herokuapp.com/'

/*              OpenWeather */
//var appid = '503f4878b7ed594ae3cea7720552b562'; 
var appid = 'e8bc32b42e0e0ca81bc3c1d8f622550e'; 
var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var ciudad = document.querySelector('#ciudad');
var imgleft = document.querySelector('#imgleft');


function santiago() {
    ciudad.value = "SANTIAGO";
    let peticion =  cors + url + ciudad.value + '&appid=' + appid;
    llenar(peticion);
}

boton.addEventListener('click', function (e) {
    e.preventDefault();
    let peticion = cors + url + ciudad.value + '&appid=' + appid;
   
    llenar(peticion);

})

function llenar(p) {
    fetch(p)
        .then(res => res.json()) 
        .then(datos => {
           if(datos.cod=="404"){
               console.log("Ciudad no encontrada")
           }else{
                tabla(datos)
                infor(datos)
                ciudad.value="";
            }
        })
}

function infor(element) {
    let fh = fechaHora(element.timezone);
    element = element.main

    informacion.innerHTML = 
    `
    <h1>${(ciudad.value.toUpperCase())}</h1>
    <p>${fh}</p>
    <p>Temperatura: <span id="temperatura"> ${parseInt(element.temp - 273.15)} ºC</span></p>
    <p>Sensación térmica: <span id="sensaciont">  ${parseInt(element.feels_like - 273.15)} ºC</span></p>
    <p>T. Max:  ${parseInt(element.temp_max - 273.15)} ºC</p>
    <p>T. Min:  ${parseInt(element.temp_min - 273.15)} ºC</p>
    <p>Presión: ${element.pressure}</p>
    <p>Humedad: ${element.humidity} </p>
    `
}

function tabla(element) {
    let fh = fechaHora(element.timezone);
    element = element.main
    let tempt = parseInt(element.temp - 273.15);

    tabladatos.innerHTML += 
    `<tr>
        <td>${ciudad.value.toUpperCase()}</td>
        <td>${fh}</td>
        <td>${tempt} ºC</td>
    </tr>`

    let foto = cargarImg(tempt);
    pintar(principal,foto)
}

function pintar(lugar,foto) {
    lugar.style.backgroundImage = `url(./img/${foto}.jpg)`;
}

function cargarImg(t) {
    let foto;
    foto = parseInt(t/5);
    return foto;
}

$(window).scroll(function() {
    $('#object').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
            $(this).addClass("slideUp");
        }
    });
});
