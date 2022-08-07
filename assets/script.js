var placeSearch = document.getElementById('exampleInputPlace');
var fetchButton = document.getElementById('fetch-button');

function getApi() {

    var requestUrl = "https://api.openweathermap.org/data";

    console.log(requestUrl);

    fetch(requestUrl)
}

fetchButton.addEventListener('click', getApi);