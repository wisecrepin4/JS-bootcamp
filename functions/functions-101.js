let convertFahrenheitToCelsius = function (fah){
  let celcius = (fah - 32) * 5/9
  return celcius;
}
console.log( convertFahrenheitToCelsius(32));
console.log( convertFahrenheitToCelsius(68));
