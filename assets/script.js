// API data need to get:

// City
// Date
// icon rep of weather conditions
// temperature
// humidity
// wind speed
// UV index
// 5 day forecast for all of the above





var fetchButton = document.getElementById('fetch-button');
var placesearch = document.getElementById('place-input');



fetchButton.addEventListener('click', getcityApi);

function getcityApi() {

    var placesearchValue = document.getElementById('place-input').value;

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + placesearchValue + "&limit=1&appid=d2d3af92279205e005384f665435892b";

    console.log(requestUrl);

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {

               var lat = data[0].lat;
               var lon = data[0].lon;

               console.log(lat);
               console.log(lon);

               var urlforcityData = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + "&exclude=minutely,hourly,daily,alerts,&appid=d2d3af92279205e005384f665435892b";

               fetch(urlforcityData)
               .then(function (response) {
                return response.json();
               })

               .then(function (data) {
                console.log(data);
                for (var i = 0; i < data.length; index++) {

                    var windSpeed = data[0].wind_speed;
                    var humidity = data[0].humidity;
                    var uvi = data[0].uvi;

    
                    
                }
                
               
               })
                
            }})}
