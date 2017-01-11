// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs :slightly_smiling_face:.
//
// plusOneSum([1, 2, 3, 4]); // 14

'use strict';

// var array = [1, 2, 3, 4];


function plusOneSum(array) {
  var temp = [];
  var result = 0;
  if (Array.isArray(array) === true && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (isNaN(array[i])) {
        return "Array contains bad input";
      } else {
        temp = array[i] + 1;
        result += temp;
      }
    }
    return result;
  } else {
    return "Argument is not a valid array";
  }
}

// plusOneSum(array);

module.exports = plusOneSum;
