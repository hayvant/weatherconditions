var apiKey = '&appid=aa90c073789690b1a3b602feb0cce131';
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';

var units = '&units=imperial'
var lat;
var lon;
var weather;
var url = api + city + apiKey;
var input;

var button = $('.btn')
var currentTime = moment().format('MMMM Do YYYY, h:mm a')

class fetch() {
    async getCurrent(input) {
        var apiKey = '&appid=aa90c073789690b1a3b602feb0cce131';
    }
}

function setup() {
    var button = select('.btn')
    button.click(weatherSearch)
    input = select('#city')
}

function weatherSearch() {
    var url = api + input.value() + apiKey + units;
    loadJSON(apiUrl, gotData)
}

function gotData(data) {
    weather = data;
}

function draw() {
    var temp = weather.main.temp;
    var humiditiy = weather.main.humiditiy;
    var uvindex = weather.main.uvindex;
    var windspeed = weather.main.windspeed;
}




// function weatherApp() {
//     frame();
//     createForm();
//     createUnitSelector();
//     const button = document.getElementById('btn');
//     const form = document.querySelector('form');
  
//     button.onclick = async () => {
//       renderCard(await callApi());
//     };
  
  
//     form.onclick = async () => {
//       renderCard(await callApi());
//     };
  
  
//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       callApi().then((response) => renderCard(response));
//     });
//   }
  
//   export default weatherApp;


// fetch(apiUrl)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     }
//   );

// async function catchResponse() {
//     var response = await fetch(data);
// }

// catchResponse();