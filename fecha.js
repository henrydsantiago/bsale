 
	function dateFormat(d)
	{
		return d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	}
function fechaHora(seconds) {
	var dateNow=new Date();
	// cogemos la fecha utc
	var dateUTC=new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), (dateNow.getUTCSeconds())+ seconds);
 
	dateUTC.setTime((dateUTC.getTime()+ seconds));

    let fechaHora = dateFormat(dateUTC)
    return(fechaHora);
}