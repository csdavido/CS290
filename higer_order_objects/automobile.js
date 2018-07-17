/*
CS 290, Week 3: Higher Order Functions
Author: David Rider
July 10, 2018
*/
function Automobile(year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
};

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
];
//automobile prototype for printing data
Automobile.prototype.logMe = function(boo) {
    var output = this.year + ' ' + this.make + ' ' + this.model;
    if (boo) {
        output += ' ';
        output += this.type;
    };
    console.log(output);
};
/*This function sorts arrays using an arbitrary comparator. 
You pass it a comparator and an array of objects appropriate 
for that comparator and it will return a new array which is 
sorted with the largest object in index 0 and the smallest 
in the last index*/
function sortArr(comparator, array) {
    /*your code here*/
    var newArray = array.sort(comparator);
    return newArray;
};

/*A comparator takes two arguments and uses some algorithm 
to compare them. If the first argument is larger or greater 
than the 2nd it returns true, otherwise it returns false. 
Here is an example that works on integers*/
function exComparator(int1, int2) {
    if (int1 > int2){
        return true;
    } else {
        return false;
    };
};

/*For all comparators if cars are 'tied' according to the 
comparison rules then the order of those 'tied' cars is 
not specified and either can come first*/

/*This compares two automobiles based on their year. 
Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2) {
    /* your code here*/
    //simple compare algorithm
    if (auto1.year < auto2.year) {
        return true;
    } else if (auto2.year < auto1.year) {
        return false;
    };
};

/*This compares two automobiles based on their make. 
It should be case insensitive and makes which are 
alphabetically earlier in the alphabet are "greater" 
than ones that come later.*/
function makeComparator(auto1, auto2) {
    /* your code here*/
    //ensure case insensitivity
    car1 = auto1.make.toUpperCase();
    car2 = auto2.make.toUpperCase();
    //simple compare algorithm
    if (car1 > car2) {
        return true;
    } else if (car1 <= car2) {
        return false;
    };
};

/*This compares two automobiles based on their type. The 
ordering from "greatest" to "least" is as follows: roadster, 
pickup, suv, wagon, (types not otherwise listed). It should 
be case insensitive. If two cars are of equal type then 
the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2){
    /* your code here*/
    //assign an integer value to each type
    var carType = {"roadster": 1, "pickup": 2, "suv": 3, "wagon": 4, "sedan": 5};
    //ensure case insensitivity
    var car1 = carType[auto1.type.toLowerCase()];
    var car2 = carType[auto2.type.toLowerCase()];
    //assign any undefined type a numeber
    if (car1 === undefined) {
        car1 = 6;
    };
    if (car2 === undefined) {
        car2 = 6;
    };

    //compare type
    if (car1 == car2) {
        //if identical type, compare years
        return yearComparator(auto1, auto2);
    } else if (car1 > car2) {
        return true;
    } else {
        return false;
    };
};

/*Your program should output the following to the console.log, 
including the opening and closing 5 stars. All values in 
parenthesis should be replaced with appropriate values. 
Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. 
This function should be added to the Automobile class and accept a single
boolean argument. If the argument is 'true' then it prints "year make model type" 
with the year, make, model and type being the values appropriate for the automobile. 
If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */
console.log("*****");

console.log("The cars sorted by year are: ");
var yearSort = sortArr(yearComparator, automobiles);
// year make model of the greatest -> least
yearSort.forEach(function(vehicle) {
    vehicle.logMe(true);
});
console.log();
console.log("The cars sorted by make are: ");
var makeSort = sortArr(makeComparator, automobiles);
// year make model of the greatest -> least
makeSort.forEach(function(vehicle) {
    vehicle.logMe(true);
});
console.log();
console.log("The cars sorted by type are: ");
var typeSort = sortArr(typeComparator, automobiles);
// year make model type of the greatest -> least
typeSort.forEach(function(vehicle) {
    vehicle.logMe(true);
});

console.log("*****");