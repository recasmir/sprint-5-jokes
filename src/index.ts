const API_URL = 'https://icanhazdadjoke.com/';
const API_ChuckNorris = 'https://api.chucknorris.io/jokes/random'
const HTMLResponse: HTMLElement | null = document.querySelector('#app');
const HTMLResponseWeather: HTMLElement | null = document.querySelector('#weatherApp');
const HTMLResponseTemp: HTMLElement | null = document.querySelector('#tempApp');
const btnJoke: HTMLElement | null = document.querySelector('#btnJoke');
const btnLowScore: HTMLElement | null = document.querySelector('#btnLowScore');
const btnMidScore: HTMLElement | null = document.querySelector('#btnMidScore');
const btnHighScore: HTMLElement | null = document.querySelector('#btnHighScore');
const bgBlob: HTMLElement | null = document.getElementById("bgBlob");

interface Joke{
  id: string,
  joke: string,
  status: number
}

interface ChuckNorris{
  categories: [],
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string
}

interface Tracking{
  joke: string,
  score: Score,
  date: string
}

enum Score{
  Low = 1,
  Medium = 2,
  High = 3
}

const reportJokes: Tracking[] = [];

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
    .then(data => {
      let randomJoke: number = Math.floor(Math.random() * 2);
      switch (randomJoke){
        case 0: HTMLResponse!.innerHTML = data[0].joke;
        break
        case 1: HTMLResponse!.innerHTML = data[1].value;
        break
      }
    })
    .catch(error => console.log(error))
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

const randomBackground = (): void => {
  let randomBg: number = Math.floor(Math.random() * 8);
  switch (randomBg){
    case 0: bgBlob!.style.background="url('img/blob-1.svg')";
    break
    case 1: bgBlob!.style.background="url('img/blob-2.svg')";
    break
    case 2: bgBlob!.style.background="url('img/blob-3.svg')";
    break
    case 3: bgBlob!.style.background="url('img/blob-4.svg')";
    break
    case 4: bgBlob!.style.background="url('img/blob-5.svg')";
    break
    case 5: bgBlob!.style.background="url('img/blob-6.svg')";
    break
    case 6: bgBlob!.style.background="url('img/blob-7.svg')";
    break
  }
  bgBlob!.style.backgroundRepeat = "no-repeat";
  bgBlob!.style.backgroundAttachment = "fixed";
  bgBlob!.style.backgroundPosition = "center";
}

btnLowScore!.addEventListener('click', () => getInfoJoke(Score.Low)); 

btnMidScore!.addEventListener('click', () => getInfoJoke(Score.Medium)); 

btnHighScore!.addEventListener('click', () => getInfoJoke(Score.High)); 

const getInfoJoke = (score:Score):void => {
  let numberJoke: Tracking = {
    joke:'',
    score:0,
    date:''
  };
  numberJoke.score = score;
  numberJoke.joke = HTMLResponse!.innerHTML;
  const d = new Date();
  let text = d.toISOString();
  numberJoke.date = text;
  reportJokes.push(numberJoke);
  console.log(reportJokes);
  return
};

//Weather API
const API_Weather ='http://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=ca&units=metric&appid=5229ecac2da52985da6f53680980c548';

interface Weather{
  "coord": {
      "lon": number,
      "lat": number
  },
  "weather": [
      {
          "id": number,
          "main": string,
          "description": string,
          "icon": string
      }
  ],
  "base": string,
  "main": {
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number,
      "pressure": number,
      "humidity": number
  },
  "visibility": number,
  "wind": {
      "speed": number,
      "deg": number,
      "gust": number
  },
  "clouds": {
      "all": number
  },
  "dt": number,
  "sys": {
      "type": number,
      "id": number,
      "country": string,
      "sunrise": number,
      "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
}

window.onload = function(): void {
fetch(`${API_Weather}`)
 .then(response => response.json())
 .then((text: Weather) => {
    HTMLResponseWeather!.innerHTML = `<img src="http://openweathermap.org/img/wn/${text.weather[0].icon}@2x.png">`;
    HTMLResponseTemp!.innerHTML = (text.main.temp).toString() + 'ºC';
 })
}

// Extra info - calling two APIs simultanously - https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/
