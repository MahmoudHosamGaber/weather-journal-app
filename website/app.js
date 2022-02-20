/* Global Variables */
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=<secretkey>&units=imperial';

const generateButton = document.querySelector('#generate');
const zipElement = document.querySelector('#zip');
const userFeeling = document.querySelector('#feelings');
const dateElement = document.querySelector('#date');
const tempElement = document.querySelector('#temp');
const contentElement = document.querySelector('#content');

const getData = async (baseURL, country, key) => {
  const res = await fetch(baseURL + country + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('error' + err);
  }
};

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML =
      Math.round(allData.temperature) + ' degrees';
    document.getElementById('content').innerHTML = allData.userResponse;
    document.getElementById('date').innerHTML = allData.date;
  } catch (error) {
    console.log('error', error);
    document.getElementById('temp').innerHTML =
      'An error occured check the country name';
    // appropriately handle the error
  }
};
generateButton.addEventListener('click', async () => {
  let country = zipElement.value;
  const res = await fetch(URL + country + apiKey);
  try {
    const data = await res.json();
    let temperature = data.main.temp;
    let userResponse = userFeeling.value;
    let d = new Date();
    let date = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    postData('/add', { temperature, date, userResponse });
    retrieveData();
  } catch (err) {
    console.log('Error' + err);
  }
});
