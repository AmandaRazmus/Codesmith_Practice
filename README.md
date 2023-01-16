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


-----------------------------------------------------------------------------------------------------

Challenge: 


-----------------------------------------------------------------------------------------------------

Challenge: 


-----------------------------------------------------------------------------------------------------

Challenge: 


-----------------------------------------------------------------------------------------------------

Challenge: 


-----------------------------------------------------------------------------------------------------
