/* Global Variables */
const API_KEY = 'c252888091ee2a2509e0d60013c2883d';
// const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
const generateButton = document.querySelector('#generate');
const zipElement = document.querySelector('#zip');

generateButton.addEventListener('click', () => {
  const zipCode = zipElement.value;
  console.log(zipCode);
});

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
