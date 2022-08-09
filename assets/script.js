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

            var day1 = document.querySelector("#day-1");
            day1.innerHTML=""
            

           

    

            

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
