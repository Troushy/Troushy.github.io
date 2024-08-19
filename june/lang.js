window.onload = function () {
	const o = ymaps.geolocation;
	document.getElementById("country").innerHTML = o.country;
    if (o.country == "Россия" || o.country == "Беларусь"){
        window.location.href='ru.html';
    } else {
        window.location.href='en.html';
    }
}