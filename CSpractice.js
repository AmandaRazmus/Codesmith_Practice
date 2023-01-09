//CALLBACKS AND HIGHER ORDER FUNCTIONS (reviewing all problems for a second time for solidifying learning)

//pluralize solution
//create a function pluralize that takes an array of strings as input
// function pluralize(arr) {
//     let newArray = []
//     //use a single for loop 
//     for (let i = 0; i < arr.length; i++){
//       newArray.push(arr[i] + "s")
//       }
//     //return a new array with an "s" added to each string in array
//     return newArray
//   }
  
//   // Uncomment these to check your work!
//   const animals = ["dog", "cat", "tree frog"];
//   console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

//-----------------------------------------------------------------------------------------------------

//map

//second attempt for review
// function subtractTwo(num){
//     //create a function called subtractTwo that accepts a number
//       return num - 2          
//         //return the result of subtracting two from number
//     }
//         function map(arr,subtractTwo) {
//     //create a function called map that takes two inputs, an array of numbers and a callback function
//       let	newArray = [];
//       for (let i = 0; i < arr.length; i++) {
//       //create a for loop to loop over array
//           newArray.push(subtractTwo(arr[i])) //*the function goes in front as the action onto the number in array
//         }
//       //put numbers into newArray after they have the instructions carried out on them
//             return newArray //*dont forget to return outside of the for loop declaration
//     //return new array filled with numbers that are result of using callback function on each element of array
//       }

//-----------------------------------------------------------------------------------------------------

//forEach

// create a function which takes an array and callback and rins callback on each element of aaray
// function forEach(array, callback) {
//   for( let i = 0; i < array.length; i++) {
//    //iterate through the array with a for loop
//     callback(array[i]); //invoke the callback function passing in the current array element
//   } 
// }

    // function map(array, call){ //map funct takes two function and returns new array as the result of invoking function on each array
    //   //initialize a new array
    //   //call forEach with the passed in array and new function. Will take an array element.
    //   //invoke the passed in callback function with the element array passed in by forEach
    //   //add return value to array
    //   //return array containing results
    //   const results = [];
    //   forEach(array, function(element) {//since its stored in global memory, dont need 'function' before. also only one parenthesis
    //   	results.push(call(element))
    // })
    //   return results
    // }

//-----------------------------------------------------------------------------------------------------
//filter array

    // function filterArray(array, callback) {
    //     const newArray = [];//results go to new array
    //     for (let i = 0; i < array.length; i += 1) { //loops through the array
    //     if (callback(array[i])) newArray.push(array[i]);//
    //     }
    //     return newArray;
    // }
    // const arrOfNums = [1, 2, 3, 4, 5];
    // function func1(num) {//use function logic to filter out even numbers 
    // return (num % 2 === 0)
    // }
    // function func2(num) {//use function logic to filter out even numbers
    //     return (num % 2 !== 0)
    // }

//-----------------------------------------------------------------------------------------------------
// function eitherFilter(array, callback1, callback2) {
//     // desired result in an array of numbers containing all elements in the passed-in array that yield a truthy value when passed into either of the two callbacks passed into eitherFilter
//   const result = []; //result is an array
//     //loop over the numbers in the array with a for loop
//     for ( let i = 0; i < array.length; i++) {
//       if (callback1(array[i]) || callback2(array[i])) result.push(array[i]);//will need logic for either/or
//     }
//     return result
//   }
    
//     //callback 1 is the swuare root of the array number is odd 
//     //callback 2 is the array number is over 100
  
  
//   // Uncomment these to check your work!
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
// //-----------------------------------------------------------------------------------------------------
// function eitherCallback(callback1, callback2) { //combines two callbcks into one callback and passes that one callback into filter array
//     //return a funtion
//     //return the boolean respresenting whether each callback is true
//     return(element, i, array) => {//here element respresents array[i] below
//       return callback1(element, i, array) || callback2(element, i, array)
//     }
//   }
  
//   // Uncomment these to check your work!
//   function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//   if (callback(array[i], i, array)) newArray.push(array[i]);//if the callback passed in is true, gets returned
//   }
//   return newArray;
//   }
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0; //this is a function that checks if a number has a square root that is an integer
//   const over100 = n => n > 100; //function returns true if a number is over 100
//   const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100); //result of calling function above. We pass in two callbacks. Will return true if integerSquareRoot is true OR over100 is true. Then inSqRtOrOver100 gets used in filterArray which will iterate over array.
//   console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

// //-----------------------------------------------------------------------------------------------------

//     // reduce
//     // /reduce iterates through array and returns a single value
//     // //create a reduce funtction that accespts an array, callback and inital value
//     // //return a single value
//     // const nums = [4, 1, 3];
//     // const returnSingleValue = nums.reduce(function(total, add, nums){
//     //   return a + b;
//     // }, 0);
    
    
//     // //iterate over the array
//     // //set the acc to be the result of calling the callback with the arg acc, current elemnt
//     // // Uncomment these to check your work!
//     // // const nums = [4, 1, 3];
//     // const add = function(a, b) { return a + b; }
//     // console.log(reduce(nums, add, 0)); // should log 8
    

//     //-----------------------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------------------


//     //-----------------------------------------------------------------------------------------------------

//     //-----------------------------------------------------------------------------------------------------


//     //-----------------------------------------------------------------------------------------------------


//     //-----------------------------------------------------------------------------------------------------


//************CLOSURE, SCOPE AND EXECUTION CONTEXT****************

//Challenge: createFunction

//create functioon createFunction
    // function createFunction() {
    //     //create new funtion
    //     function printGreeting(){
    //     //return string hello world
    //     return 'hello world'
    //     }
    //     //return new function
    //     return printGreeting //this returns pringGreeting into createFunction
    // }
    
    
    // // Uncomment these to check your work!
    // const myFunction = createFunction();
    // console.log(myFunction()); //should log: 'hello world'

//-----------------------------------------------------------------------------------------------------

//Challenge: createFunctionWithInput

    // // //create a function createFunctionWithInput that accepts one input and returns a function
    // function createFunctionWithInput(input) {
    //     //create new function
    // function printInput(){
    //     return input
    //     } 
    // //return function
    //     return printInput
    // }

    // // UNCOMMENT THESE TO TEST YOUR WORK!
    // const sampleFunc = createFunctionWithInput('sample');
    // console.log(sampleFunc()); // should log: 'sample'
    // const helloFunc = createFunctionWithInput('hello');
    // console.log(helloFunc()); // should log: 'hello'

//-----------------------------------------------------------------------------------------------------

//Challenge: Scoping

    // function outer() {
    //     let counter = 0; // this variable is outside incrementCounter's scope
    //     function incrementCounter() {
    //     counter++;
    //     console.log('counter', counter);
    //     }
    //     return incrementCounter;
    // }
    
    // const willCounter = outer();
    // const jasCounter = outer();
    
    // //Uncomment each of these lines one by one.
    // //Before your do, guess what will be logged from each function call.
    
    // willCounter();
    // willCounter();
    // willCounter();
    
    // jasCounter();
    // willCounter();

//-----------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------
