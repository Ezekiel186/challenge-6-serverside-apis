console.log("test")

// given an array return true if theres atleast 1 duplicate in the array, if there no duplicates return false

// testcase 1 [1, 2, 13, 12, 4, 2 ] => ture

// testcase 2 [1, 2, 3, 4] flase

// what I would take the first value and compare it to the whole array
// how? to check for duplicates
// how? make a for loop checking each value
// make a for loop inside the first for loop and check if index[i] == index[j]
// if index[i] == index[j] console log true
// if index[i] !== index[j] console log false
var inputsaf = [1, 2, 13, 12, 4, 2];
var test = [1, 2, 3, 4];

function lookForDup(input1) {
    for (i = 0; i < input1.length; i++) {
        for (j = 0; j < input1.length; j++) {
            if (input1[i] == input1[j] && i !== j) {
                console.log("dup");
                return true;
            } else { }
        }
    }; console.log("noDup");
    return false;
}

lookForDup(test);

// unshift write a function that takes an element and an array as arguments the function should insert the element at the beginning of the array or index[0]

// test [1, 30, 13, 3] element = 9 function expected output is the [9, 1, 30 , 13, 3]
// test2 [] element 4 expected is [4]


// make an array call it output
// take the element and put it at index[0]
//loop through the input and add it on to the output array 

var el1 = 9;
var el2 = 4;

var array1 = [1, 30, 13, 3];
var array2 = [];

function addElement(element, array) {
    var output = [];
    output.push(element);
    // console.log(output)
    for (i = 0; i < array.length; i++) {
        output.push(array[i]);

    }
    console.log(output);
}

addElement(el1, array1);


// Create a function `forEvery` that takes an array and a function as arguments.
// the `forEvery` function should execute the callback function for every element within the array
// ## Example
// ```javascript
function callBack(params){
  console.log("I think" + params + "are funny");
}
var arr = ["kittins","cats","felines","kitties"];
forEvery(arr, callBack);
// ```
// Expected Output:
// "I think kittins are funny"
// "I think cats are funny"
// "I think felines are funny"
// "I think kitties are funny"


// loop the values in the array and plug them in the callback function


function forEvery(inputArr, cb){
    for (i = 0; i < inputArr.length; i++){
        cb(" " + inputArr[i] + " ");
    }
}


// create a function cypher that takes in two arguments one a string of letter and two an interger

