// API data need to get:

// City
// Date
// icon rep of weather conditions
// temperature
// humidity
// wind speed
// UV index
// 5 day forecast for all of the above

var fetchButton = document.getElementById("fetch-button");
var placesearch = document.getElementById("place-input");

fetchButton.addEventListener("click", getcityApi);

function getcityApi() {
  var placesearchValue = document.getElementById("place-input").value;

  var requestUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    placesearchValue +
    "&limit=1&appid=d2d3af92279205e005384f665435892b";

  console.log(requestUrl);

  

 

// console.log(day);



  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var lat = data[0].lat;
        var lon = data[0].lon;

        console.log(lat);
        console.log(lon);

        var urlforcityData =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=minutely,hourly,&units=metric&appid=d2d3af92279205e005384f665435892b";

        fetch(urlforcityData)
          .then(function (response) {
            return response.json();
          })

          .then(function (data) {
            console.log(data);
            var day = new Date().toLocaleDateString();
            var cityandDate = document.querySelector("#city-and-date");
            cityandDate.innerHTML=`${placesearchValue} (${day})`;
            console.log(placesearchValue);
            var temp = document.querySelector("#temp");
            temp.innerHTML=`Temp: ${data.current.temp}C`;

            var windSpeed = document.querySelector("#wind");
            windSpeed.innerHTML=`Wind Speed: ${data.current.wind_speed}mph`;

            var humidity = document.querySelector("#humidity");
            humidity.innerHTML=`Humidity: ${data.current.humidity}%`;
            var uvi = data.current.uvi;
            var uv = document.querySelector("#uv");
            if (uvi < 3) {
                uv.style.color="green"
            } else if (uvi < 7) {
                uv.style.color="yellow"
            } else {
                uv.style.color="red"
            }

            uv.innerHTML=`UV: ${data.current.uvi}`;
            // uv.style.color="red";

            // var day1 = document.querySelector("#day-1");
            // day1.innerHTML=""

            // Rendering first day of forecast

            var day1forecastDate = document.querySelector("#day-1");

            day1forecastDate.innerHTML=`Date: ${day + 1}`;

            var day1Temp = document.querySelector("#day-1-temp");

            day1Temp.innerHTML=`Temp: ${data.daily[1].temp.day}C`;

            var day1Wind = document.querySelector("#day-1-wind");

            day1Wind.innerHTML = `Wind Speed: ${data.daily[1].wind_speed}mph`;

            var day1Humidity = document.querySelector("#day-1-humidity");

            day1Humidity.innerHTML = `Humidity: ${data.daily[1].humidity}%`;

            // Rendering second day of forecast

            var day2Temp = document.querySelector("#day-2-temp");

            day2Temp.innerHTML = `Temp: ${data.daily[2].temp.day}C`;

            var day2Wind = document.querySelector("#day-2-wind");

            day2Wind.innerHTML = `Wind Speed: ${data.daily[2].wind_speed}mph`;

            var day2Humidity = document.querySelector("#day-2-humidity");

            day2Humidity.innerHTML = `Humidity: ${data.daily[2].humidity}%`;



            // Rendering third day of forecast

            var day3Temp = document.querySelector("#day-3-temp");

            day3Temp.innerHTML=`Temp: ${data.daily[3].temp.day}C`;

            var day3Wind = document.querySelector("#day-3-wind");

            day3Wind.innerHTML = `Wind Speed: ${data.daily[3].wind_speed}mph`;

            var day3Humidity = document.querySelector("#day-3-humidity");

            day3Humidity.innerHTML = `Humidity: ${data.daily[3].humidity}%`;

            // Rendering fourth day of forecast

            var day4Temp = document.querySelector("#day-4-temp");

            day4Temp.innerHTML=`Temp: ${data.daily[4].temp.day}C`;


            var day4Wind = document.querySelector("#day-4-wind");

            day4Wind.innerHTML = `Wind Speed: ${data.daily[4].wind_speed}mph`;

            var day4Humidity = document.querySelector("#day-4-humidity");

            day4Humidity.innerHTML = `Humidity: ${data.daily[4].humidity}%`;

            // Rendering fifth day of forecast

            var day5Temp = document.querySelector("#day-5-temp");

            day5Temp.innerHTML=`Temp: ${data.daily[5].temp.day}C`;

            var day5Wind = document.querySelector("#day-5-wind");

            day5Wind.innerHTML = `Wind Speed: ${data.daily[5].wind_speed}mph`;

            var day5Humidity = document.querySelector("#day-5-humidity");

            day5Humidity.innerHTML = `Humidity: ${data.daily[5].humidity}%`;

            














          


            

           

    

            

            // var humidity = data.list.main.humidity;
            // var uvi = data.weather.uvi;
            // var temp = data.list.main.temp;

            console.log(windSpeed);
            // console.log(humidity);
            // console.log(uvi);
            // console.log(temp);
          });
      }
    });
}
