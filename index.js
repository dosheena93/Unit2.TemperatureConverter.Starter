// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahrenheit) {
const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahrenheit, celsius) {
  let message;
  if (fahrenheit < 32) {
    message = `${fahrenheit} degrees Fahrenheit (${celsius.toFixed(2)} degrees Celsius) feels very cold.`;
  } else if (fahrenheit < 64) {
    message = `${fahrenheit} degrees Fahrenheit (${celsius.toFixed(2)} degrees Celsius) feels cold.`;
  } else if (fahrenheit < 86) {
    message = `${fahrenheit} degrees Fahrenheit (${celsius.toFixed(2)} degrees Celsius) feels warm.`;
  } else {
    message = `${fahrenheit} degrees Fahrenheit (${celsius.toFixed(2)} degrees Celsius) feels hot.`;
  }
  return message;
}


function convertAndDisplay() {
  const fahrenheitInput = document.getElementById("fahrenheitInput");
  const resultElement = document.getElementById("result");

  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = convertToCelsius(fahrenheit);
    const message = createMessage(fahrenheit, celsius);
    resultElement.textContent = message;
  } else {
    resultElement.textContent = "Please enter a valid number.";
  }
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
