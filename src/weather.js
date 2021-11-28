

async function getWeather(fetchURL) {
  const content = document.querySelector(".content");
  try{
    const response = await fetch(fetchURL)
    const data = await response.json()  
    
    let newData = {}; //TODO move this to another function so the catch error is handles Response not invalid type
    newData = data.main;
    newData.name = data.name;
    newData.clouds = data.weather[0];

    console.table(newData);
    for(let key in newData) {
      if(key === 'clouds') {
        content.innerHTML += key + ': ' + JSON.stringify(newData[key]) + '<br>';
      } else {
        content.innerHTML += key + ': ' + newData[key] + '<br>';
      }
    }
    
  } catch(err){
    throw new Error(err);
    content.innerHTML = "City not found";
  }
}

export default getWeather