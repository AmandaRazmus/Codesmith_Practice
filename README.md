# Codesmith_Practice
CSX Practice Problems

CALLBACKS AND HIGHER ORDER FUNCTIONS

Challenge: pluralize
    Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

    The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

        pluralize should be a function
        pluralize should return an empty array when called with an empty array
        pluralize should not mutate the input array
        pluralize should pluralize the strings in the input array

-----------------------------------------------------------------------------------------------------

Challenge: map

    Create a function subtractTwo that accepts a number and returns that number minus 2.

    Then create a function map that takes two inputs -

    an array of numbers (a list of numbers)
    a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
    Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

        subtractTwo should be a function
        map should be a function
        map should return an array
        map should execute a callback function on each element

-----------------------------------------------------------------------------------------------------

Challenge: forEach

Part 1
Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];
    forEach(letters, function(char) {
    alphabet += char;
    });
    console.log(alphabet); //prints 'abcd'

Part 2
    Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
    
-----------------------------------------------------------------------------------------------------

Challenge: filterArray

Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

filterArray should be a function
filterArray(arrOfNums, func1) should return [2, 4]
filterArray(arrOfNums, func2) should return [1, 3, 5]
