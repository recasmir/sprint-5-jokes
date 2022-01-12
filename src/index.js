var API_URL = 'https://icanhazdadjoke.com/';
var API_ChuckNorris = 'https://api.chucknorris.io/jokes/random';
var HTMLResponse = document.querySelector('#app');
var HTMLResponseWeather = document.querySelector('#weatherApp');
var HTMLResponseTemp = document.querySelector('#tempApp');
var btnJoke = document.querySelector('#btnJoke');
var btnLowScore = document.querySelector('#btnLowScore');
var btnMidScore = document.querySelector('#btnMidScore');
var btnHighScore = document.querySelector('#btnHighScore');
var bgBlob = document.getElementById("bgBlob");
var Score;
(function (Score) {
    Score[Score["Low"] = 1] = "Low";
    Score[Score["Medium"] = 2] = "Medium";
    Score[Score["High"] = 3] = "High";
})(Score || (Score = {}));
var reportJokes = [];
//Fetch Dad Joke
var getDadJoke = function () {
    fetch("".concat(API_URL), {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (text) { return HTMLResponse.innerHTML = text.joke; })["catch"](function (error) { return console.log(error); });
};
//Fetch Chuck Norris Joke   
var getChuckJoke = function () {
    fetch("".concat(API_ChuckNorris))
        .then(function (response) { return response.json(); })
        .then(function (text) { return HTMLResponse.innerHTML = text.value; })["catch"](function (error) { return console.log(error); });
};
//Ask for a random joke
btnJoke.addEventListener('click', function () {
    randomBackground();
    var randomJoke = Math.floor(Math.random() * 2);
    if (randomJoke === 0) {
        getDadJoke();
    }
    else {
        getChuckJoke();
    }
});
var randomBackground = function () {
    var randomBg = Math.floor(Math.random() * 8);
    bgBlob.style.background = "url('img/blob-".concat(randomBg, ".svg')");
    bgBlob.style.backgroundRepeat = "no-repeat";
    bgBlob.style.backgroundAttachment = "fixed";
    bgBlob.style.backgroundPosition = "center";
};
btnLowScore.addEventListener('click', function () { return getInfoJoke(Score.Low); });
btnMidScore.addEventListener('click', function () { return getInfoJoke(Score.Medium); });
btnHighScore.addEventListener('click', function () { return getInfoJoke(Score.High); });
var getInfoJoke = function (score) {
    var numberJoke = {
        joke: '',
        score: 0,
        date: ''
    };
    numberJoke.score = score;
    numberJoke.joke = HTMLResponse.innerHTML;
    var d = new Date();
    var text = d.toISOString();
    numberJoke.date = text;
    reportJokes.push(numberJoke);
    console.log(reportJokes);
    return;
};
//Weather API
var API_Weather = 'http://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=ca&units=metric&appid=5229ecac2da52985da6f53680980c548';
window.onload = function () {
    fetch("".concat(API_Weather))
        .then(function (response) { return response.json(); })
        .then(function (text) {
        HTMLResponseWeather.innerHTML = "<img src=\"http://openweathermap.org/img/wn/".concat(text.weather[0].icon, "@2x.png\">");
        HTMLResponseTemp.innerHTML = (text.main.temp).toString() + 'ºC';
    })["catch"](function (error) { return console.log(error); });
};
/* Extra info - calling two APIs simultanously - https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

btnJoke!.addEventListener('click', () => {
  randomBackground();
  Promise.all([
    fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      },
    }),
    fetch(`${API_ChuckNorris}`)])
    //Get a JSON object from each of the responses and create an array with the reponses of both APIs using map
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data=> {
      let randomJoke: number = Math.floor(Math.random() * 2);
      switch (randomJoke){
        case 0: HTMLResponse!.innerHTML = data[0].joke;
        break
        case 1: HTMLResponse!.innerHTML = data[1].value;
        break
      }
    })
    .catch(error => console.log(error))
}); */ 
