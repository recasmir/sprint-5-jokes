declare const API_URL = "https://icanhazdadjoke.com/";
declare const API_ChuckNorris = "https://api.chucknorris.io/jokes/random";
declare const HTMLResponse: HTMLElement | null;
declare const HTMLResponseWeather: HTMLElement | null;
declare const HTMLResponseTemp: HTMLElement | null;
declare const btnJoke: HTMLElement | null;
declare const btnLowScore: HTMLElement | null;
declare const btnMidScore: HTMLElement | null;
declare const btnHighScore: HTMLElement | null;
declare const bgBlob: HTMLElement | null;
interface Joke {
    id: string;
    joke: string;
    status: number;
}
interface ChuckNorris {
    categories: [];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}
interface Tracking {
    joke: string;
    score: Score;
    date: string;
}
declare enum Score {
    Low = 1,
    Medium = 2,
    High = 3
}
declare const reportJokes: Tracking[];
declare const randomBackground: () => void;
declare const getInfoJoke: (score: Score) => void;
declare const API_Weather = "http://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=ca&units=metric&appid=5229ecac2da52985da6f53680980c548";
interface Weather {
    "coord": {
        "lon": number;
        "lat": number;
    };
    "weather": [
        {
            "id": number;
            "main": string;
            "description": string;
            "icon": string;
        }
    ];
    "base": string;
    "main": {
        "temp": number;
        "feels_like": number;
        "temp_min": number;
        "temp_max": number;
        "pressure": number;
        "humidity": number;
    };
    "visibility": number;
    "wind": {
        "speed": number;
        "deg": number;
        "gust": number;
    };
    "clouds": {
        "all": number;
    };
    "dt": number;
    "sys": {
        "type": number;
        "id": number;
        "country": string;
        "sunrise": number;
        "sunset": number;
    };
    "timezone": number;
    "id": number;
    "name": string;
    "cod": number;
}
