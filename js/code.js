let weather = {
    "apiKey": "cfad8fec9b2105fafb1fa9ee18e4c2c7",
    getWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },
    showWeather: function (data) {
        const { name } = data;
        const { description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function() {
        this.getWeather(document.querySelector(".searchBox").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})