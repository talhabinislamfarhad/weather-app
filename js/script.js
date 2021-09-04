// All id of html 
const searchInput = document.querySelector('.search-bar');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const tempCel = document.querySelector('.temp-cel');
const divider = document.querySelector('#divider');
const tempFar = document.querySelector('.temp-far');
const country = document.querySelector('.country');
const desc = document.querySelector('.desc');
const searchBtn = document.querySelector('#search-btn');
const cityName = document.querySelector('#city-name');
const imgIcon = document.querySelector('#img');

// Search function
searchBtn.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
    .then(response => response.json())
    .then(data => {
      let tempCelValue = data['main']['temp'];
      let tempFarValue = data['main']['temp'];
      let nameValue = data['name'];
      let url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      imgIcon.setAttribute('src', url);
      let countryvalue = data['sys']['country'];
      let descValue = data['weather'][0]['main'];


      cityName.innerHTML = "Weather in " + nameValue + " city";
      desc.innerHTML = descValue;
      tempCel.innerHTML = parseInt(tempCelValue) + "°C";
      divider.innerHTML = "/";
      tempFar.innerHTML = parseInt((tempFarValue * 9 / 5) + 32) + "°F";
      country.innerHTML = "Country: " + countryvalue;

      searchInput.value = "";

    })
})