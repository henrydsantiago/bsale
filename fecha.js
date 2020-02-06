
/**
 * Funcion para mostrar la fecha correcamente
 */

// Definimos la diferencia en horas del time zone

/* 
function dateFormat(d)
{
    return d.getDate()+"/"+(parseInt(d.getMonth())+ 1) +"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
function fechaHora(tzSeconds) {
    console.log("en fecha.js el parametro que llego: " + tzSeconds)
    var dateNow=new Date();
    var dateUTC=new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), (dateNow.getUTCSeconds()) + tzSeconds)
    dateUTC.setTime(dateUTC.getTime()+tzSeconds);

    return(dateFormat(dateNow));
} */

/*----*/
	/**
	 * Funcion para mostrar la fecha correcamente
	 */
    var seconds=-14400 ;
    
	function dateFormat(d)
	{
		return d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	}
function fechaHora(seconds) {
	var dateNow=new Date();
	// cogemos la fecha utc
	var dateUTC=new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), (dateNow.getUTCSeconds())+ seconds);
 
	// Definimos la diferencia en horas del time zone
	// Para la diferencia horaria de dos horas y media seria 2.5
	//var tz=-2.5;
	// Calculamos los segundos de la zona horaria
	//var seconds=(tz*60*60)*1000;
	
 
/* 	document.write("Fecha actual => "+dateFormat(dateNow));
	document.write("Fecha UTC => "+dateFormat(dateUTC));
  */
	// Aplicamos la diferencia horaria añadiendo los segundos al timestamp de la
	// fecha UTC
	dateUTC.setTime((dateUTC.getTime()+ seconds));
 /* 
	document.write("TimeZone => ");
    document.write("Fecha UTC+TimeZone => "+dateFormat(dateUTC));  */
    let fechaHora = dateFormat(dateUTC)
    console.log('Esto es fechahora en fecha.js'+fechaHora)
    return(fechaHora);
}