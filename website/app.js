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
