// Go to this URL and register https://openweathermap.org/appid
// Get your API KEY (appid)

// fetch(URL).then(onSuccess()), onError()
const APIkey = "59c952eadead5c75c69a11921a0d7a93"
 const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const onSuccess = position => {
   
const { coords: { latitude, longitude } } = position; // destructuring

callWeather(latitude, longitude);
}
const onError = error => {

    console.error(error.message);
    const notification = document.createElement("p");
    notification.innerText = error.message;
    const divNotifications = document.getElementsByClassName("notification")[0]
    divNotifications.style.display = "block";
    divNotifications.appendChild(notification);
};
const convertKelvinToCelsius = kelvin => Math.round(kelvin - 273.15);

const showWeatherInfo = info => {
    const {
        main: { temp },
        name,
        sys: { country },
        weather: [{ description, icon }],
        wind: { speed }
    }= info;
    console.log("info que necesito", convertKelvinToCelsius(temp), name, country, description, icon, speed);
    const iconElement = document.getElementById("icon");
    iconElement.src = `icons/${icon}.png`;

    const imprimirTemperatura = document.getElementById("temperatura")
    imprimirTemperatura.innerHTML = convertKelvinToCelsius(temp);

    const imprimirDescription = document.getElementById("descripcion")
    imprimirDescription.innerHTML = description

    const imprimirLocation = document.getElementById("location")
    imprimirLocation.innerHTML = country

    const imprimirPueblo = document.getElementById("pueblo")
    imprimirPueblo.innerHTML = name

    const imprimirVelocidad = document.getElementById("velocidad")
    imprimirVelocidad.innerHTML = speed + " Viento"


//     function  imprimirEnHtml () {
// return convertKelvinToCelsius;
// }
// imprimirEnHtml()

    }
    


const callWeather = (latitiude, longitude) => {
    const call = fetch(`${baseURL}lat=${latitiude}&lon=${longitude}&appid=${APIkey}`);
    call.then(response => response.json()).then(wheatherInfo => showWeatherInfo(wheatherInfo));
    call.catch(error => console.error(error));
};
navigator.geolocation.getCurrentPosition(onSuccess, onError);
