function displayPosition(position) {
    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=ru';
  
    $.getJSON(GEOCODING).done(function(location) {
  
      $('#address').html(location.results[0].formatted_address);
      $('#latitude').html(position.coords.latitude);
      $('#longitude').html(position.coords.longitude);
  
      // в location.results[0] содержится больше всего информации об адресе
      for (var i = 0; i < location.results[0].address_components.length; i++) {
         switch(location.results[0].address_components[i].types[0]) {
           case 'locality':
             $('#city').html(location.results[0].address_components[i].long_name);
             break;
           case 'administrative_area_level_1':
             $('#state').html(location.results[0].address_components[i].long_name);
             break;
           case 'country':
             $('#country').html(location.results[0].address_components[i].long_name);
             break;
         }
      }
    })
  }