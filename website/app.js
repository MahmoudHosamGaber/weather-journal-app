/* Global Variables */
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=c252888091ee2a2509e0d60013c2883d&units=imperial';

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
