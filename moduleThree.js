var randomNumber = require('./randomNumber');
var toUSD = require('./toUSD');
// var write = require('./moduleThree');


function numChange () {
  return toUSD(randomNumber);
}

function write () {
  return "Account Balance: ";
}


module.exports.numChange = numChange;
module.exports.write = write;
