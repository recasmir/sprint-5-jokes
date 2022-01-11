"use strict";
const API_URL = 'https://icanhazdadjoke.com/';
const API_ChuckNorris = 'https://api.chucknorris.io/jokes/random';
const HTMLResponse = document.querySelector('#app');
const HTMLResponseWeather = document.querySelector('#weatherApp');
const HTMLResponseTemp = document.querySelector('#tempApp');
const btnJoke = document.querySelector('#btnJoke');
const btnLowScore = document.querySelector('#btnLowScore');
const btnMidScore = document.querySelector('#btnMidScore');
const btnHighScore = document.querySelector('#btnHighScore');
const bgBlob = document.getElementById("bgBlob");
var Score;
(function (Score) {
    Score[Score["Low"] = 1] = "Low";
    Score[Score["Medium"] = 2] = "Medium";
    Score[Score["High"] = 3] = "High";
})(Score || (Score = {}));
const reportJokes = [];
btnJoke.addEventListener('click', () => {
    randomBackground();
    Promise.all([
        fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
        }),
        fetch(`${API_ChuckNorris}`)
    ])
        //Get a JSON object from each of the responses and create an array with the reponses of both APIs using map
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
        let randomJoke = Math.floor(Math.random() * 2);
        switch (randomJoke) {
            case 0:
                HTMLResponse.innerHTML = data[0].joke;
                break;
            case 1:
                HTMLResponse.innerHTML = data[1].value;
                break;
        }
    })
        .catch(error => console.log(error));
});
/* Old call of the jokes API

btnJoke!.addEventListener('click', (event) => {
  fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
    },
  })
   .then(response => response.json())
   .then((text: Joke) => HTMLResponse!.innerHTML = text.joke)
}); */
const randomBackground = () => {
    let randomBg = Math.floor(Math.random() * 8);
    switch (randomBg) {
        case 0:
            bgBlob.style.background = "url('img/blob-1.svg')";
            break;
        case 1:
            bgBlob.style.background = "url('img/blob-2.svg')";
            break;
        case 2:
            bgBlob.style.background = "url('img/blob-3.svg')";
            break;
        case 3:
            bgBlob.style.background = "url('img/blob-4.svg')";
            break;
        case 4:
            bgBlob.style.background = "url('img/blob-5.svg')";
            break;
        case 5:
            bgBlob.style.background = "url('img/blob-6.svg')";
            break;
        case 6:
            bgBlob.style.background = "url('img/blob-7.svg')";
            break;
    }
    bgBlob.style.backgroundRepeat = "no-repeat";
    bgBlob.style.backgroundAttachment = "fixed";
    bgBlob.style.backgroundPosition = "center";
};
btnLowScore.addEventListener('click', () => getInfoJoke(Score.Low));
btnMidScore.addEventListener('click', () => getInfoJoke(Score.Medium));
btnHighScore.addEventListener('click', () => getInfoJoke(Score.High));
const getInfoJoke = (score) => {
    let numberJoke = {
        joke: '',
        score: 0,
        date: ''
    };
    numberJoke.score = score;
    numberJoke.joke = HTMLResponse.innerHTML;
    const d = new Date();
    let text = d.toISOString();
    numberJoke.date = text;
    reportJokes.push(numberJoke);
    console.log(reportJokes);
    return;
};
//Weather API
const API_Weather = 'http://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=ca&units=metric&appid=5229ecac2da52985da6f53680980c548';
window.onload = function () {
    fetch(`${API_Weather}`)
        .then(response => response.json())
        .then((text) => {
        HTMLResponseWeather.innerHTML = `<img src="http://openweathermap.org/img/wn/${text.weather[0].icon}@2x.png">`;
        HTMLResponseTemp.innerHTML = (text.main.temp).toString() + 'ºC';
    });
};
// Extra info - calling two APIs simultanously - https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
//# sourceMappingURL=index.js.map