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


-----------------------------------------------------------------------------------------------------
Challenge: eitherFilter

    Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.


-----------------------------------------------------------------------------------------------------

Challenge: eitherCallback

    Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

-----------------------------------------------------------------------------------------------------

Challenge: reduce

    Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

-----------------------------------------------------------------------------------------------------

Challenge: intersection

    Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

-----------------------------------------------------------------------------------------------------

Challenge: union

    Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

-----------------------------------------------------------------------------------------------------

Challenge: objOfMatches 

    Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

-----------------------------------------------------------------------------------------------------

Challenge: arrToObj

    Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

-----------------------------------------------------------------------------------------------------

Challenge: multiMap

    Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

-----------------------------------------------------------------------------------------------------

Challenge: majority

    Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.


    

-----------------------------------------------------------------------------------------------------

Challenge: prioritize

    Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.


-----------------------------------------------------------------------------------------------------

Challenge: countBy

    Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

-----------------------------------------------------------------------------------------------------

Challenge: groupBy

    Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

-----------------------------------------------------------------------------------------------------

Challenge: goodKeys

    Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

-----------------------------------------------------------------------------------------------------









//************CLOSURE, SCOPE AND EXECUTION CONTEXT****************

Challenge: createFunction

    Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

    const myFunction = createFunction();
    // Let's call the function we created and log its return value
    console.log(myFunction()); //should log: 'hello world'
    When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

-----------------------------------------------------------------------------------------------------

Challenge: createFunctionWithInput

    Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

    const sampleFunc = createFunctionWithInput('sample');
    const helloFunc = createFunctionWithInput('hello');

    // Now we'll call the functions we created and log the result
    console.log(sampleFunc()); 
    // should log 'sample' to the console
    console.log(helloFunc());
    // should log 'hello' to the console

-----------------------------------------------------------------------------------------------------

Challenge: Scoping

    Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.

-----------------------------------------------------------------------------------------------------

Challenge: addByX

    Now we are going to create a function addByX that returns a function that will add an input by x.

-----------------------------------------------------------------------------------------------------

Challenge: once

    Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.


-----------------------------------------------------------------------------------------------------

Challenge: after 

    Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.


-----------------------------------------------------------------------------------------------------

Challenge: delay

    Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();


-----------------------------------------------------------------------------------------------------

Challenge: saveOutput

    Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values


-----------------------------------------------------------------------------------------------------

Challenge: cycleIterator


    Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.


-----------------------------------------------------------------------------------------------------

Challenge: defineFirstArg


    Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.


-----------------------------------------------------------------------------------------------------

Challenge: hobbyTracker

    Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

    When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

-----------------------------------------------------------------------------------------------------

Challenge: dateStamp

    Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.


-----------------------------------------------------------------------------------------------------

Challenge: censor   

    Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).




*******RECURSION***********

Challenge: repeater

Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

Input: {String} char
Output: {String}

-----------------------------------------------------------------------------------------------------

Challenge: factorial

    Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

-----------------------------------------------------------------------------------------------------

Challenge: getLength

    Get the length of an array using recursion without accessing its length property.
-----------------------------------------------------------------------------------------------------

Challenge: POW

    Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

Input 1: {Number} base - base number raised to the exponent
Input 2: {Number} exponent - exponent the base is raised to
Output: {Number} - expected value of base raised to exponent
-----------------------------------------------------------------------------------------------------

Challenge: flow

    Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

    Input 1: {Number} input - number flowing through all functions
    Input 2: {Array} funcArray - array of functions to pass input through
    Output: {Number} - final output of final function
-----------------------------------------------------------------------------------------------------

Challenge: shuffleCards

    You are creating a card game application with your friend.

She already wrote a function that divides the deck of cards into top and bottom halves, but needs help writing a function that shuffles the two halves together again.

Challenge
Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:

the first element should be the first element of the first input array,

the second element should be the first element of the second input array,

the third element should be the second element of the first input array,

the fourth element should be the second element of the second array,

and so on.

The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

This problem can be solved in many ways, but try to solve it with recursion!

Input1: {Array} topHalf - cards in the top half of the deck
Input2: {Array} bottomHalf - cards in the bottom half of the deck
Output: {Array} - the top and bottom halves of the deck interleaved together, with any remaining cards app
-----------------------------------------------------------------------------------------------------
//Challenge: cascade

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - 
// this very challenging problem can be solved with and without string manipulation!



-----------------------------------------------------------------------------------------------------

//Challenge: 
Challenge: makePerson
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the name argument passed into the function
Add an age property to the newly created object with its value being the "age" argument passed into the function
Return the object




-----------------------------------------------------------------------------------------------------

//Challenge: 



-----------------------------------------------------------------------------------------------------


//Challenge: 



-----------------------------------------------------------------------------------------------------