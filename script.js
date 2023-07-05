//VARIABLES
const apiKey = `9cac984db2824ab096003908232806`;
const button = document.querySelector("#submitButton");
const input = document.querySelector("#textInput");
const output = document.querySelector(".weatherInfo");

//EVENT LISTENERS
button.addEventListener('click', async()=>{
    const inputValue = input.value;
    const normalizedInput = inputValue.toLowerCase();
    const finalInput = normalizedInput.replaceAll(' ', '%20')
    const cityOutput = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${finalInput}&aqi=no`);
    const cityName = cityOutput.data.location.name;
    const region = cityOutput.data.location.region;
    const localTime = cityOutput.data.location.localtime;
    const temp = cityOutput.data.current.temp_f;
    const humidity = cityOutput.data.current.humidity;
    output.innerHTML=`
        <h1 id="location">Location: ${cityName}, ${region}</h1>
        <h2 id="localTime">Local Time: ${localTime}</h2>
        <h2 id="temp">Current Temperature(F): ${temp}</h2>
        <h2 id="humidity">Humidity: ${humidity}</h2>
    `
})
