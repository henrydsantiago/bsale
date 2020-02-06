//document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
//document.cookie = "Set-Cookie", "HttpOnly;Secure;SameSite=Strict";



var body = document.querySelector('#body');
var boton = document.querySelector('#boton');
var tabladatos =  document.querySelector('#tabla');
var informacion =  document.querySelector('#infowheater');
var principal =  document.querySelector('#sect-principal');


var cors= 'https://cors-anywhere.herokuapp.com/'

/*              OpenWeather */
// 'http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=503f4878b7ed594ae3cea7720552b562'

//var appid = '503f4878b7ed594ae3cea7720552b562'; 
var appid = 'e8bc32b42e0e0ca81bc3c1d8f622550e'; 
var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var ciudad = document.querySelector('#ciudad');
var imgleft = document.querySelector('#imgleft');

/*              Pixabay */
'https://pixabay.com/api/?key=15145411-c8bf03d6b25d9149d67b96648&q=yellow+flowers&image_type=photo'

var apikey = '15145411-c8bf03d6b25d9149d67b96648';
var pixurl = 'https://pixabay.com/api/?key='+ apikey + '&q=';


/* (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})(); */

function santiago() {
    ciudad.value = "SANTIAGO";
    let peticion = cors + url + ciudad.value + '&appid=' + appid;
    pixurl += ciudad.value + '&image_type=photo'; 
    llenar(peticion);
  }

/* var contenido = document.querySelector('#nombre');
var fperfil = document.querySelector('#fotoperfil');

var tabladatos = document.querySelector('#tabla');

console.log(" Contenido: " + contenido); */



boton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(ciudad.value);
    let peticion =cors + url + ciudad.value + '&appid=' + appid;
    pixurl += ciudad.value + '&image_type=photo'; 
    llenar(peticion);

})

/* function traer(direccion) {
    fetch(direccion)
        .then(res => res.json()) // Importante el formato en el que vendrá la respuesta a la petición
        .then(data => {
            console.log(data);
        })
} */




function llenar(p) {
    fetch(p)
        .then(res => res.json()) 
        .then(datos => {
           console.log(datos);
           if(datos.cod=="404"){
               Console.log("Ciudad no encontrada")
           }else{
                tabla(datos)
                infor(datos)
                //imgLeft(pixurl)
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

function cargarImg(t) {
    let foto;
    if(t<=5){
        foto=0;
    }
    if(t>5 & t<=10){
        foto=1;
    }
    if(t>10 & t<=15){
        foto=2;
    }
    if(t>15 & t<=20){
        foto=3;
    }
    if(t>20 & t<=25){
        foto=4;
    }
    if(t>25 & t<=30){
        foto=5;
    }
    if(t>30){
        foto=6;
    }
    console.log(foto)
    return foto;
}

function pintar(lugar,foto) {
    console.log(lugar)
    lugar.style.backgroundImage = `url(./img/${foto}.jpg)`;

/*     lugar.innerHTML = 
        `<div style="background-image: url(./img/${foto}.jpg);
        " ><div/>` */

}

/* function imgLeft(p) {
    fetch(p) 
        .then(res => res.json())
        .then(data => {
            traerImg(data)
        })
}

function traerImg(element){
    let imagdir = element.hits['0'];
    console.log("Pixabay: ");
    console.log(imagdir);
    imgleft.innerHTML = 
    `
    <img class="imagenes" src="${imagdir.webformatURL}" alt="">
    `
    imagdir = "";
} */

