const iss_api_url = "https://api.wheretheiss.at/v1/satellites/25544/positions";
const iss_coordinate = "https://api.wheretheiss.at/v1/coordinates/";

/**input date and time*/
const submitForm = () => {
	const date = $("#date").val();
	const time = $("#time").val();

	let newDate = new Date(date + " " + time);
	const timestamp = convertToTimestamp(newDate);

	console.log(beforeHour(timestamp));
	
	/*connecting with the api server*/
	$.ajax({
		url: iss_api_url,
		data: {
			timestamps: beforeHour(timestamp)
		},
		success: function(res){
			$.each(res, function(i,item){
			  let long = item.longitude;
			  let lati = item.latitude;
			  let date = convertFromTimestamp(item.timestamp);
			/*display the data*/
			  $.ajax({
					url: iss_coordinate + lati + "," + long,
					success: function(res){
						$("#result").append("<p><b> " + date + " </b></p>", "<p>Country Code: " + res.country_code + "</p>", "<p>Timezone: " + res.timezone_id + "</p>", "<p>Latitude: " + res.latitude + "</p>", "<p>Longitude: " + res.longitude + "</p>");
					}
				});
			 });
		}
	});

	$.ajax({
		url: iss_api_url,
		data: {
			timestamps: timestamp
		},
		success: function(res){
			$.each(res, function(i,item){
			  let long = item.longitude;
			  let lati = item.latitude;
			  let date = convertFromTimestamp(item.timestamp);
			  $.ajax({
					url: iss_coordinate + lati + "," + long,
					success: function(res){
						$("#result2").append("<p><b> " + date + " </b></p>", "<p>Country Code: " + res.country_code + "</p>", "<p>Timezone: " + res.timezone_id + "</p>", "<p>Latitude: " + res.latitude + "</p>", "<p>Longitude: " + res.longitude + "</p>");
					}
				});
			 });
		}
	});

	$.ajax({
		url: iss_api_url,
		data: {
			timestamps: afterHour(timestamp)
		},
		success: function(res){
			$.each(res, function(i,item){
			  let long = item.longitude;
			  let lati = item.latitude;
			  let date = convertFromTimestamp(item.timestamp);
			  $.ajax({
					url: iss_coordinate + lati + "," + long,
					success: function(res){
						$("#result3").append("<p><b> " + date + " </b></p>", "<p>Country Code: " + res.country_code + "</p>", "<p>Timezone: " + res.timezone_id + "</p>", "<p>Latitude: " + res.latitude + "</p>", "<p>Longitude: " + res.longitude + "</p>");
					}
				});
			 });
		}
	});
}
/*to get the timestamp for every 10 minutes 1 hour before*/
const beforeHour = timestamp => {

	let paramString = "";

	for(let i = 1; i <= 6 ; i++){
		let d = convertFromTimestamp(timestamp);
		d.setMinutes(d.getMinutes() - (i * 10));
		paramString += convertToTimestamp(d);

		if (i < 6){
			paramString += ",";
		}
	}

	return paramString;
}

/*to get the timestamp for every 10 minutes 1 hour after*/
const afterHour = timestamp => {

	let paramString = "";

	for(let i = 1; i <= 6 ; i++){
		let d = convertFromTimestamp(timestamp);
		d.setMinutes(d.getMinutes() + (i * 10));
		paramString += convertToTimestamp(d);

		if (i < 6){
			paramString += ",";
		}
	}

	return paramString;
}


const convertToTimestamp = date => Math.round(date.getTime() / 1000);

const convertFromTimestamp = timestamp => new Date(timestamp * 1000); 

