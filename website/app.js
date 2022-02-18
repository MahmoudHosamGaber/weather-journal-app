/* Global Variables */
const API_KEY = 'c252888091ee2a2509e0d60013c2883d';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?q=new york&APPID=c252888091ee2a2509e0d60013c2883d';
const generateButton = document.querySelector('#generate');
const zipElement = document.querySelector('#zip');
const userFeeling = document.querySelector('#feelings');
const dateElement = document.querySelector('#date');
const tempElement = document.querySelector('#temp');
const contentElement = document.querySelector('#content');

generateButton.addEventListener('click', () => {
  const zipCode = zipElement.value;

  // Create a new date instance dynamically with JS
  const date = new Date();
  const currentDate =
    date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  const getData = fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dateElement.innerHTML = 'Date: ' + currentDate;
      tempElement.innerHTML = 'Temperature: ' + data.main.temp;
      contentElement.innerHTML = userFeeling.value;
    });
});
