const ftoc = function(fahrenheitValue) {
  let convertedTemp = ((fahrenheitValue - 32) / 1.8000) * 10;
  return Math.round(convertedTemp) / 10;
}

const ctof = function(celsiusValue) {
  let convertedTemp = (celsiusValue * 1.8000 + 32) * 10;
  return Math.round(convertedTemp) / 10;
}

module.exports = {
  ftoc,
  ctof
}
