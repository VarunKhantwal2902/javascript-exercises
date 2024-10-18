const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = +celsius.toFixed(1);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * 9) / 5;
  fahrenheit = +fahrenheit.toFixed(1) + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
