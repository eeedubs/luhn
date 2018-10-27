//from right to left, double value of every 2nd digit starting at 2nd to last
 //if result of doubling > 9, add digits of the product (or the doubled sum - 9)
 //sum all digits
 //if %10 === 0, number is valid

function check(n) {
  var total = 0; // for the double sum value
  var array = n.toString().split("");
  // converts the number to a string and splits it into array items
  array.reverse(); // reverse the array spot
  for (var x = 0; x < array.length; x++){
  // array[0] is the check value, 1 is the first number we double
    if (x % 2 !== 0){ // if the array spot is a 2nd digit
      var dubTemp = Number(array[x]) * 2; // take the value of that array item and double it
      // array[x] is a string; convert it back to a number
      if (dubTemp > 9){ // if the doubled number is greater than 9
        total += (dubTemp - 9); // add the doubled sum - 9 to the total
      }
      else {            // otherwise, add the doubled sum to the total
        total += dubTemp;
      }
    }
    else {            // otherwise, add the number value of the item at array[x]
      total += Number(array[x]);
    }
  }
  return total % 10 === 0;  // evaluate if the total is divisible by 10
}

module.exports = check;