//document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
//document.cookie = "Set-Cookie", "HttpOnly;Secure;SameSite=Strict";




var body = document.querySelector('#body');
var boton = document.querySelector('#boton');
var tabladatos =  document.querySelector('#tabla');
var informacion =  document.querySelector('#infowheater');


/*              OpenWeather */
'http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=503f4878b7ed594ae3cea7720552b562'

var appid = '503f4878b7ed594ae3cea7720552b562'; 
var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var ciudad = document.querySelector('#ciudad');
var imgleft = document.querySelector('#imgleft');

/*              Pixabay */
'https://pixabay.com/api/?key=15145411-c8bf03d6b25d9149d67b96648&q=yellow+flowers&image_type=photo'

var apikey = '15145411-c8bf03d6b25d9149d67b96648';
var pixurl = 'https://pixabay.com/api/?key='+ apikey + '&q=';


function santiago() {
    ciudad.value = "santiago";
    let peticion = url +'santiago&appid=' + appid;
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
    let peticion = url + ciudad.value + '&appid=' + appid;
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
                tabla(datos.main)
                infor(datos.main)
                //imgLeft(pixurl)
                ciudad.value="";
            }
        })
}


function infor(element) {
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();

    informacion.innerHTML = 
    `
    <h1>${(ciudad.value.toUpperCase())}</h1>
    <p>Fecha :${date} Hora: ${time} </p>
    <p>Temperatura: ${parseInt(element.temp - 273.15)} ºC</p>
    <p>Sensación térmica: ${parseInt(element.feels_like - 273.15)} ºC</p>
    <p>T. Max:  ${parseInt(element.temp_max - 273.15)} ºC</p>
    <p>T. Min:  ${parseInt(element.temp_min - 273.15)} ºC</p>
    <p>Presión: ${element.pressure}</p>
    <p>Humedad: ${element.humidity} </p>
    `
}

function tabla(element) {
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    let t = parseInt(element.temp - 273.15);

    tabladatos.innerHTML += 
    `<tr>
        <td>${ciudad.value}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${t}</td>
    </tr>`

    let foto = cargarImg(t);
    pintar(imgleft,foto)
}

function cargarImg(t) {
    let foto;
    if(t<=10){
        foto=0;
    }
    if(t>10 & t<=20){
        foto=1;
    }
    if(t>20 & t<=30){
        foto=2;
    }
    if(t>30){
        foto=3;
    }
    return foto;
}

function pintar(lugar,foto) {
    lugar.innerHTML = 
    `
    <img class="imagenes" src="img/${foto}.jpg" alt="">
    `
}

/* function imgLeft(p) {
    fetch(p) 
        .then(res => res.json())
        .then(data => {
            traerImg(data)
        })
} */

/* function traerImg(element){
    let imagdir = element.hits['0'];
    console.log("Pixabay: ");
    console.log(imagdir);
    imgleft.innerHTML = 
    `
    <img class="imagenes" src="${imagdir.webformatURL}" alt="">
    `
    imagdir = "";
} */
