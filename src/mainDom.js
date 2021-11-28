import getWeather  from "./weather.js";

function addMainDOM(containerClass) {
  const container = document.querySelector(containerClass);

  //Create seach bar
  const weatherSearch = document.createElement('input');
  weatherSearch.type = 'search';
  container.appendChild(weatherSearch);

  //Create search button
  const searchButton = document.createElement('button');
  searchButton.innerHTML = 'Search'
  container.appendChild(searchButton);

  //When clicked, search weather
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let location = weatherSearch.value;
    getWeather(getURL(location))
  })

  //create content area
  const content = document.createElement('div');
  content.classList.add('content')
  container.append(content);
}


function getURL(location) {
  const MY_API = 'ea990b4bfa6943c57e16e6c91e3b6fc2'
  return "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + MY_API;
}

export default addMainDOM;