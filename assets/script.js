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

    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + placesearchValue + "&limit=5&appid=d2d3af92279205e005384f665435892b";

    console.log(requestUrl);

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)

            for (var i = 0; index < data.length; i++) {
                ;
                
            }
        })

    

    // fetch(requestUrl)
}