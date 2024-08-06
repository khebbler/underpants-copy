// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// Functional Library

var _ = {};  // var _ = {}



/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    // Returning value unchanged
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // Checking for null
    if (value === null) {
        return 'null';
    }
    // Checking for array
    if (Array.isArray(value)) {
        return 'array';
    }
    // Returning type of value
    return typeof value;
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    //  Checking if <array> is not an array
    if(!Array.isArray(array)) {
        // returning []
        return [];
    }
    // Checking if <number> is not given or not a number
    if (number === undefined || typeof number !== 'number') {
        // return just the first element in <array>.
        return array[0];
    }
    //  1) What if <number> is negative?
    if (number < 0) {
        return [];
    }
    // *   2) What if <number> is greater than <array>.length?
    return array.slice(0, number);
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
// Check if the first argument is not an array
if (!Array.isArray(array)) {
    return [];
}
// If number is not given or not a number, return the last element of the array
if (number === undefined || typeof number !== 'number') {
    return array[array.length - 1];
}
// If number is negative, return an empty array
if (number < 0) {
    return [];
}
// If number is greater than array length, return the entire array
if (number > array.length) {
    return array;
}
// Return the last number items of the array
return array.slice(array.length - number);
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/*
I: an array, value
O: the index of <array> that is the first occurrance of <value>,
   -1 if <value> is not in <array>
C: cannot use .indexof
E: what if <array> has multiple occurances of val?
   what if <val> isn't in <array>?
*/



_.indexOf = function(array, value) {
    // Looping through array
    for (let i = 0; i < array.length; i++) {
        // Checking if the index of <array> is equal to the <value>
        if (array[i] === value) {
            // Returning the first occurence of index
            return i;
        }
    }
    // Returning -1 if <value> is not in <array>
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/*
I: an array, a value
O: Return true if <array> contains <value>
   Return false otherwise
C: must use ternary operator
E: did you use === ?
   what if no <value> is given?
*/


_.contains = function(array, value){
//           condition      if true       if false
return value === undefined ? false : array.includes(value);
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function (high order func)
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

/*
I: a collection, a function
O:
C:
E:
*/
 _.each = function(collection, func) {
    // Checking if collection is an array
    if (Array.isArray(collection)) {
        // Iterating through collection array
        for (let i = 0; i < collection.length; i++) {
            // Calling function with the element, it's index, <collection>
            func(collection[i], i, collection);
        }
    } else {
        // Iterating through collection object
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
            // Calling function with the property's value, it's key, <collection>
            func(collection[key], key, collection);    
            }
        }
    }
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
/*
I: an array
O: a new array of all elements from <array> with duplicates removed
C: must use indexOf()
E:
*/

_.unique = function(array) {
    // Initializing uniqueArray 
    var uniqueArray = [];
    // Iterating throuh array
    for (var i = 0; i < array.length; i++) {
      // Using indexOf to check if i is in uniqueArray
      if (_.indexOf(uniqueArray, array[i]) === -1) {
        // Pushing elements to uniqueArray
        uniqueArray.push(array[i]);
      }
    }
    // Returing uniqueArray
    return uniqueArray;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
    _filter(['alex', 'francis', 'aaron']), function... 
* Extra Credit:
*   use _.each in your implementation
*/

/*
I: Takes in an array and a function
O: a new array of elements for which calling <function> returned true
C:
E:
*/

_.filter = function(array, func) {
    // Creating output array
    let output = [];
    // Looping over array
    for (let i = 0; i < array.length; i++) {
        // Determining if result of invoking func is true
        if (func(array[i], i, array)) {
            output.push(array[i]);
        }
    }
    // Returning output array
    return output;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/*
I: an array, a function
O: a new array of elements for which calling <function> returned false
C:
E:
*/

_.reject = function(array, func) {
    var storageArr = [];
    // Iterating through array
    for (var i = 0; i < array.length; i++) {
        // Determining if result of invoking func is false
        if (!func(array[i], i, array)) {
            // Pushing elements to storageArr
            storageArr.push(array[i]);
        }
    }
    // Returning storageArr
    return storageArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
/* 
I: an array, a function
O: an array that is made up of 2 sub arrays
C:
E: This is going to return an array of arrays.
*/

_.partition = function(array, func) {
    // Initializing storage arrays
    let trueArr = [];
    let falseArr = [];
    // Iterating through array
    for (let i = 0; i < array.length; i++) {
        // Determining if result of invoking func is true 
        if (func(array[i], i, array)) {
            // Pushing to trueArr
            trueArr.push(array[i]);
        } else {
            // Otherwise, pushing to falseArr
            falseArr.push(array[i]);
        }
    }
    // Returning an array that is made up of 2 sub arrays
    return [trueArr, falseArr];

}


/** _.map (same as class 7/29)
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*
* Reduce iterates through an array to "accumulate" a single return value
*/

_.reduce = function(array, func, seed ) {
    // Initializing output variable (what we are accumulating)
    let output;
    // Checking if seed has value
    if (seed === undefined) {
        // Output = first item in array
        output = array[0];
        // Iterating through array
        for (let i = 1; i < array.length; i++) {
            // Reassigning output to result of invoking callback function
            output = func(output, array[i], i);   
        }
    // else there is a seed value
    } else { 
        // Assigning output to seed
        output = seed;
        // Iterating through entire array
        for (let i = 0; i < array.length; i++) {
            // Reassigning output to result of invoking callback function
            output = func(output, array[i], i)  
        }
    }
    // Returning output
    return output;
}


/** _.extend // Object.assign()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

/*
I: target, objects
O:
C:
E:
*/
_.extend = function(target, ...objects){
    // Iterating through objects
    for (let i = 0; i < objects.length; i++) {
        //
        let storageObj = objects[i];
    }
    
}


_.extend = function(target, ...objects){
    return Object.assign(target, ...objects);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}