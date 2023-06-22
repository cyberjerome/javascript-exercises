const palindromes = function (str) {
  // make lowercase
  formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

  // check if formatted string is equal to its reverse
  return formattedStr === formattedStr.split('').reverse().join('');


};


// Do not edit below this line
module.exports = palindromes;
