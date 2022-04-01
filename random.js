
//random number generator

module.exports = function randomNumber (min, max) {
    
    let maxNum = max + 1;

  return  Math.floor(Math.random() * maxNum) + min;

}