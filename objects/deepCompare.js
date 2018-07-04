/*
CS 290, Week 2: Objects
Author: David Rider
July 2, 2018
*/
/*deepEqual (obj1, obj2) - deep comparison
function which takes two values, returns true
only if they are the samevalue or objects with 
the same properties*/
function deepEqual (o1, o2) {
	//comparing the objects directly with the === operator
	if (o1 === o2) {
		return true;
	};
	//since typeof null produces "object"
	if (o1 == null || o2 == null) {
		return false;
	};
	/*using the typeof operator, if typeof "object" is true
	for both objects, then a deep comparioson should be made */
	if (typeof o1 != "object" || typeof o2 != "object") {
		return false;
	};
	//create variables for keys of objects
	var o1Keys = Object.keys(o1);
	var o2Keys = Object.keys(o2);
	if (o1Keys.length === o2Keys.length) {
		for (var x in o1) {
			//recursion check for objects
			if (deepEqual(o1[x],o2[x]) === false) {
				return false;
			};
			return true;
		};
	//all else returns false
	return false;
	};
};
//testing
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
/*
//test object #1
var animal1 = {
	name: "deer",
	gender: "male",
	mammal: true,
}
//test object #2
var animal2 = {
	name: "deer",
	gender: "female",
	mammal: true,
}
//test object #3
var animal3 = {
	name: "deer",
	gender: "female",
	mammal: true,
}
*/