// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
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
   if (value instanceof Array) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return "date";
    } else {
        return typeof value;
    }
};  

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num) {
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } else if (num > arr.length) {
        return arr;
    } else if (num === undefined) {
        return arr[0];
    } else if (typeof num !== 'number') {
        num = num.length;
    } else {
        var newArr = [];
        for (var i = 0; i < num; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};


/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num) {
    var newArr = [];
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } else if (typeof num !== 'number' || num === undefined) {
        return arr[arr.length -1];
    } else if (num > arr.length) {
        return arr;
    } else {
        for (var i = 0; i < arr.length-1; i++) {
            newArr.push(arr[i+1]);
        }
    } return newArr;
};

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
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

_.each = function(collec, func) {
    if (Array.isArray(collec)) {
        for (var i = 0; i <= collec.length-1; i++) {
            func(collec[i], i, collec);
        }
    } else if (collec instanceof Object) {
        for (var key in collec) {
            func(collec[key], key, collec);
        }
    }
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, value) {
    for (var i = 0; i <= arr.length-1; i++) {
        if (arr[i] === value) {
            return i;
        }
    } return -1;
};


/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, func) {
    var newArr = [];
    
    _.each(arr, function(element, index, arr) {
        if (func(element, index, arr)) newArr.push(element);
    }); return newArr;
};

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func) {
    var newArr = [];
    
    for (var i = 0; i <= arr.length-1; i++) {
        var element = arr[i];
        
        if (func (element, i, arr) ===  false) {
            newArr.push(element);
        }
    }
    
    return newArr;
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(arr, func) {
    var truthy = [];
    var falsy = [];
    
    _.each(arr, function(element, key, arr) {
      (func(element, key, arr) ? truthy : falsy).push(element);
    });
    
    return [truthy, falsy];
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr) {
    var newArr = [];
    
    for (var i = 0; i <= arr.length-1; i++) {
        var value = arr[i];
        
        if (!newArr.includes(value)) {
            newArr.push(value);
        }
    } return newArr;
};

/** _.map()
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

_.map = function(collec, func) {
    var newArr = [];
    
    if (collec instanceof Array) {
        for (var i = 0; i <= collec.length-1; i++) {
            newArr.push(func(collec[i], i, collec));
        }
    } else if (collec instanceof Object) {
        for (var key in collec) {
            newArr.push(func(collec[key], key, collec));
        }
    } return newArr;
};

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arr, prop) {
    return _.map(arr, function(element, index, array){
        return element[prop];
    });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value) {
    return (arr.includes(value)) ? true : false;
};

/** _.every()
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
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    var newArr = [];
    var all = true;
    
    if (typeof func === 'function') {
    _.each(collection, function(element, index, arr) {
        if (func(element, index, arr)) {
            newArr.push(element);
        } else { all = false;}
    });
    
    } else {
        if (Array.isArray(collection)) {
            for (var i = 0; i <= collection.length-1; i++) {
                if (collection[i] === false) {
                    return all = false;
                }
            }
        } else { all = true;}} return all;
};

/** _.some()
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
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    var newArr = [];
    var all = false;
    
    if (typeof func === 'function') {
    _.each(collection, function(element, index, arr) {
        if (func(element, index, arr)) {
            newArr.push(element);
            all = true;
        } else { all !== true;}
    });
    
    } else {
        if (Array.isArray(collection)) {
            for (var i = 0; i <= collection.length-1; i++) {
                if (collection[i] === true) {
                    return all = true;
                }
            }
        } else { all = false;}} return all;
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments: collection = arr
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ 
*       return previousSum + currentValue 
    }, 0) -> 6
*/

_.reduce = function(arr, func, seed) {
    _.each(arr, function(item, i, arr) {   
        if (seed === undefined) { seed = item;}
        else { seed = func(seed, item, i);}
    }); return seed;
};

/** _.extend()
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

_.extend = function(obj) {
    _.each(arguments, function(objExtend) {
        _.each(objExtend, function(value, key) {
            obj[key] = value;
        });
    }); return obj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
