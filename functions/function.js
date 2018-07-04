//CS 290 Week 1
//July 1, 2018
//Author: David Rider
//function call before function is defined
//this function call works (returns true)
console.log(isDivisibleByThree(9));
//function
function isDivisibleByThree(x) {
  return x % 3 == 0;
}
//calling this function before it is called does not work
console.log(divideByThree(5));
//funciton assigned to a value
var divideByThree = function(x) {
	return x % 3 == 0;
}
//calling this function assigned to a value will work now
//(returns false)
console.log(divideByThree(5));