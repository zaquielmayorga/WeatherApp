// // Go to this URL and register https://openweathermap.org/appid
// // Get your API KEY (appid)

// // fetch(URL).then(onSuccess()), onError()
// const APIkey = "59c952eadead5c75c69a11921a0d7a93"
//  const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
// const onSuccess = position => {
   
// const { coords: { latitude, longitude } } = position; // destructuring

// callWeather(latitude, longitude);
// }
// const onError = error => {

//     console.error(error.message);
//     const notification = document.createElement("p");
//     notification.innerText = error.message;
//     const divNotifications = document.getElementsByClassName("notification")[0]
//     divNotifications.style.display = "block";
//     divNotifications.appendChild(notification);
// };
// const convertKelvinToCelsius = kelvin => Math.round(kelvin - 273.15);

// const showWeatherInfo = info => {
//     const {
//         main: { temp },
//         name,
//         sys: { country },
//         weather: [{ description, icon }],
//         wind: { speed }
//     }= info;
//     console.log("info que necesito", convertKelvinToCelsius(temp), name, country, description, icon, speed);
//     const iconElement = document.getElementById("icon");
//     iconElement.src = `icons/${icon}.png`;

//     const imprimirTemperatura = document.getElementById("temperatura")
//     imprimirTemperatura.innerHTML = convertKelvinToCelsius(temp);

//     const imprimirDescription = document.getElementById("descripcion")
//     imprimirDescription.innerHTML = description

//     const imprimirLocation = document.getElementById("location")
//     imprimirLocation.innerHTML = country

//     const imprimirPueblo = document.getElementById("pueblo")
//     imprimirPueblo.innerHTML = name

//     const imprimirVelocidad = document.getElementById("velocidad")
//     imprimirVelocidad.innerHTML = speed + " Viento"


// //     function  imprimirEnHtml () {
// // return convertKelvinToCelsius;
// // }
// // imprimirEnHtml()

//     }
    


// const callWeather = (latitiude, longitude) => {
//     const call = fetch(`${baseURL}lat=${latitiude}&lon=${longitude}&appid=${APIkey}`);
//     call.then(response => response.json()).then(wheatherInfo => showWeatherInfo(wheatherInfo));
//     call.catch(error => console.error(error));
// };
// navigator.geolocation.getCurrentPosition(onSuccess, onError);

// // const capitalizeFirstLetters = text => {
// //     const separetedWords = text.split(" ");
// //     const arrayResult = separetedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// //     return arrayResult.join(" "); convertir la primera letra en mayuscula

// searchCityWeather = cityName => {

//     const call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`)
//     call.then(response => response.json()).then(WeatherSearchInfo => searchResultList(WeatherSearchInfo))
//     call.catch(error => console.error(error))

//     const handleOnSearch = () => {
//         const text =document.getElementById
//     }


// }

// Go to this URL and register https://openweathermap.org/appid
// Get your API KEY (appid)
const APIkey = "416e0f0dd8c8e9042517b54f30bf565c";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const mock = {
  message: "accurate",
  cod: "200",
  count: 5,
  list: [
    {
      id: 3128760,
      name: "Barcelona",
      coord: {
        lat: 41.3888,
        lon: 2.159
      },
      main: {
        temp: 290.86,
        feels_like: 290.45,
        temp_min: 289.82,
        temp_max: 292.04,
        pressure: 1011,
        humidity: 59
      },
      dt: 1602612741,
      wind: {
        speed: 0.5,
        deg: 130
      },
      sys: {
        country: "ES"
      },
      rain: null,
      snow: null,
      clouds: {
        all: 20
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n"
        }
      ]
    },
    {
      id: 6356055,
      name: "Barcelona",
      coord: {
        lat: 41.3994,
        lon: 2.128
      },
      main: {
        temp: 290.8,
        feels_like: 290.37,
        temp_min: 289.82,
        temp_max: 292.04,
        pressure: 1011,
        humidity: 59
      },
      dt: 1602612815,
      wind: {
        speed: 0.5,
        deg: 130
      },
      sys: {
        country: "ES"
      },
      rain: null,
      snow: null,
      clouds: {
        all: 20
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n"
        }
      ]
    },
    {
      id: 3648559,
      name: "Barcelona",
      coord: {
        lat: 10.1333,
        lon: -64.7
      },
      main: {
        temp: 303.57,
        feels_like: 307.81,
        temp_min: 303.57,
        temp_max: 303.57,
        pressure: 1009,
        humidity: 64,
        sea_level: 1009,
        grnd_level: 1009
      },
      dt: 1602612772,
      wind: {
        speed: 1.3,
        deg: 59
      },
      sys: {
        country: "VE"
      },
      rain: {
        "1h": 0.17
      },
      snow: null,
      clouds: {
        all: 33
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ]
    },
    {
      id: 1726708,
      name: "Barcelona",
      coord: {
        lat: 8.1592,
        lon: 126.4342
      },
      main: {
        temp: 298.36,
        feels_like: 301.72,
        temp_min: 298.36,
        temp_max: 298.36,
        pressure: 1006,
        humidity: 84,
        sea_level: 1006,
        grnd_level: 1001
      },
      dt: 1602612618,
      wind: {
        speed: 2.15,
        deg: 245
      },
      sys: {
        country: "PH"
      },
      rain: {
        "1h": 4.211
      },
      snow: null,
      clouds: {
        all: 99
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n"
        }
      ]
    },
    {
      id: 1726705,
      name: "Barcelona",
      coord: {
        lat: 12.8683,
        lon: 124.1419
      },
      main: {
        temp: 299.46,
        feels_like: 302.1,
        temp_min: 299.46,
        temp_max: 299.46,
        pressure: 1006,
        humidity: 87,
        sea_level: 1006,
        grnd_level: 1005
      },
      dt: 1602612618,
      wind: {
        speed: 4.51,
        deg: 352
      },
      sys: {
        country: "PH"
      },
      rain: {
        "1h": 5.615
      },
      snow: null,
      clouds: {
        all: 100
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10n"
        }
      ]
    }
  ]
};
const onSuccess = position => {
  const {
    coords: { latitude, longitude }
  } = position;
  callWeather(latitude, longitude);
};
const onError = error => {
  console.error(error.message);
  const notification = document.createElement("p");
  notification.innerText = error.message;
  const divNotification = document.getElementsByClassName("notification")[0];
  divNotification.style.display = "block";
  divNotification.appendChild(notification);
};
const convertKelvinToCelsius = kelvin => Math.round(kelvin - 273.15);
const capitalizeFirstLetters = text => {
  const separetedWords = text.split(" ");
  const arrayResult = separetedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return arrayResult.join(" ");
};
const showWeatherInfo = info => {
  const {
    main: { temp },
    name,
    sys: { country },
    weather: [{ description, icon }]
  } = info;
  const iconElement = document.getElementById("icon");
  iconElement.src = `icons/${icon}.png`;
  const temperature = document.getElementById("temperature-value");
  temperature.innerText = `${convertKelvinToCelsius(temp)}°C`;
  const desc = document.getElementById("temperature-description");
  const capitalizedDescription = capitalizeFirstLetters(description);
  desc.innerText = capitalizedDescription;
  const place = document.getElementById("location");
  place.innerText = `${capitalizeFirstLetters(name)}, ${country}`;
};
const searchResultsList = results => {
  console.log("resulst", results);
  const resultsList = document.getElementById("results");
  const { list: citiesList } = results;
  citiesList.map(city => {
    console.log("==>>>", city);
    const {
      main: { temp },
      name,
      sys: { country },
      weather: [{ description, icon }]
    } = city;
    const listItem = document.createElement("li");
    listItem.innerHTML = `${name}, ${country}, ${description}, ${convertKelvinToCelsius(temp)}°C`;
    const img = document.createElement("img");
    img.src = `icons/${icon}.png`;
    listItem.appendChild(img);
    resultsList.appendChild(listItem);
  });
};
const callWeather = (latitude, longitude) => {
  const call = fetch(`${baseURL}lat=${latitude}&lon=${longitude}&appid=${APIkey}`);
  call.then(response => response.json()).then(weatherInfo => showWeatherInfo(weatherInfo));
  call.catch(error => console.error(error));
};
const searchCityWeather = cityName => {
  // const call = fetch(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${APIkey}`);
  // call.then(response => response.json()).then(weatherSearchInfo => searchResultsList(weatherSearchInfo));
  // call.catch(error => console.error(error));
  searchResultsList(mock);
};
const handleOnSearch = () => {
  const text = document.getElementById("searchInput").value;
  console.log("lo que vamos a buscar es ", text);
  if (text) {
    searchCityWeather(text.toLowerCase());
  }
};
navigator.geolocation.getCurrentPosition(onSuccess, onError);
// fetch(URL).then(onSuccess()).catch(onError());