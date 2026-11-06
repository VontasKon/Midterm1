
// select where weather information will be shown off
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#weatherDescription");


// I am using the open meteo api as seen online... thnhis fetches the weather code and current temperature for the area with the coordinates that have been punched in like seeing a map from above
fetch(`https://api.open-meteo.com/v1/forecast?latitude=37.9593&longitude=23.7513&current=temperature_2m,weather_code&timezone=auto`)

    // Converts the API response into json, json is stored as texd and can be read by many languages
    .then(response => response.json())

    // Use the received weather data
    .then(data => {

        // display the immediate temperature as celcius degrees
        temperature.textContent = data.current.temperature_2m + "°C";

        // get the weather code
        const code = data.current.weather_code;

        // these websites use 0-100 as weather codes, for example 0 is clear - 1,2,3 is cloudy... etc
        if (code === 0) {
            description.textContent = "The Sky is CLEAR";
        } else if (code <= 3) {
            description.textContent = "it will be CLOUDY";
        } else if (code <= 48) {
            description.textContent = "FOG...";
        } else if (code <= 67) {
            description.textContent = "Today You need an UMBRELLA";
        } else if (code <= 77) {
            description.textContent = "Snow??? In Athens???";
        } else if (code <= 82) {
            description.textContent = "Rain showers";
        } else {
            description.textContent = "Thunderstorms";
        }

    })
