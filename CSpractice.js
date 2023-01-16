//CALLBACKS AND HIGHER ORDER FUNCTIONS (reviewing all problems for a second time for solidifying learning)

//pluralize solution
//create a function pluralize that takes an array of strings as input
// function pluralize(arr) {
// let newArray = []
// //use a single for loop 
// for (let i = 0; i < arr.length; i++){
//   newArray.push(arr[i] + "s")
//   }
// //return a new array with an "s" added to each string in array
// return newArray
//   }
  
//   // Uncomment these to check your work!
//   const animals = ["dog", "cat", "tree frog"];
//   console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

//-----------------------------------------------------------------------------------------------------

//map

// //second attempt for review
// function forEach(arr,callback) {
// 	//create a function forEach that takes an array and a callback
// 	for (let i = 0; i < arr.length; i++) {
// 	//use a for loop 
//callback(arr[i])
//run the callback on each element of the array
//    //nothing is returned
// 	}
// }

// function map(arr,callback) {
// //create a function called map that takes two inputs, an array of numbers and a callback function
//   const results = [];
//   forEach(array, function(element) //*the function goes in front as the action onto the number in array
//   return results.push(callback(element))
//   //put numbers into result after they have the instructions carried out on them	
// })
  
// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



// //first attempt
// //create a function which takes an array and callback and rins callback on each element of aaray
// function forEach(array, callback) {
//   for( let i = 0; i < array.length; i++) {
//    //iterate through the array with a for loop
//callback(array[i]); //invoke the callback function passing in the current array element
//   } 
// }

// function map(array, call){ //map funct takes two function and returns new array as the result of invoking function on each array
//   // initialize a new array
//   // call forEach with the passed in array and new function. Will take an array element.
//   // invoke the passed in callback function with the element array passed in by forEach
//   //add return value to array
//   //return array containing results
//   const results = [];
//   forEach(array, function(element) {//since its stored in global memory, dont need 'function' before. also only one parenthesis. array[i] is what is being passed into element
//   	results.push(call(element))
// })//missing parenthesis from line 50 goes here
//   return results
// }

// console.log(typeof forEach); // should log: 'function'
// forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c' separately on individual lines
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

//-----------------------------------------------------------------------------------------------------

//forEach

// create a function which takes an array and callback and rins callback on each element of aaray
// function forEach(array, callback) {
//   for( let i = 0; i < array.length; i++) {
//    //iterate through the array with a for loop
//callback(array[i]); //invoke the callback function passing in the current array element
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
    //const newArray = [];//results go to new array
    //for (let i = 0; i < array.length; i += 1) { //loops through the array
    //if (callback(array[i])) newArray.push(array[i]);//
    //}
    //return newArray;
    // }
    // const arrOfNums = [1, 2, 3, 4, 5];
    // function func1(num) {//use function logic to filter out even numbers 
    // return (num % 2 === 0)
    // }
    // function func2(num) {//use function logic to filter out even numbers
    return (num % 2 !== 0)
    // }

//-----------------------------------------------------------------------------------------------------

// function eitherFilter(array, callback1, callback2) {
// desired result in an array of numbers containing all elements in the passed-in array that yield a truthy value when passed into either of the two callbacks passed into eitherFilter
//   const result = []; //result is an array
//loop over the numbers in the array with a for loop
//for ( let i = 0; i < array.length; i++) {
  //if (callback1(array[i]) || callback2(array[i])) result.push(array[i]);//will need logic for either/or
//}
//return result
//   }
    
//callback 1 is the swuare root of the array number is odd 
//callback 2 is the array number is over 100
  
  
//   // Uncomment these to check your work!
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
// //-----------------------------------------------------------------------------------------------------
// function eitherCallback(callback1, callback2) { //combines two callbcks into one callback and passes that one callback into filter array
//return a funtion
//return the boolean respresenting whether each callback is true
//return(element, i, array) => {//here element respresents array[i] below
  //return callback1(element, i, array) || callback2(element, i, array)
//}
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

// Challenge: reduce
// /reduce iterates through array and returns a single value
// //create a reduce funtction that accespts an array, callback and inital value
// //return a single value
// const nums = [4, 1, 3];
// const returnSingleValue = nums.reduce(function(total, add, nums){
//   return a + b;
// }, 0);
    
    
// //iterate over the array
// //set the acc to be the result of calling the callback with the arg acc, current elemnt
// // Uncomment these to check your work!
// // const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8
    

//-----------------------------------------------------------------------------------------------------

Challenege: 


//-----------------------------------------------------------------------------------------------------

Challenege: 



//-----------------------------------------------------------------------------------------------------

Challenege: 


//-----------------------------------------------------------------------------------------------------

Challenege: 


//-----------------------------------------------------------------------------------------------------

Challenege: 



//-----------------------------------------------------------------------------------------------------








//************CLOSURE, SCOPE AND EXECUTION CONTEXT****************

//Challenge: createFunction

//create functioon createFunction
    // // function createFunction() {
    // //create new funtion
    // function printGreeting(){
    // //return string hello world
    // return 'hello world'
    // }
    //return new function
    //return printGreeting //this returns pringGreeting into createFunction
    // }
    
    
    // // Uncomment these to check your work!
    // const myFunction = createFunction();
    // console.log(myFunction()); //should log: 'hello world'

//-----------------------------------------------------------------------------------------------------

//Challenge: createFunctionWithInput

    // // //create a function createFunctionWithInput that accepts one input and returns a function
    // function createFunctionWithInput(input) {
    //create new function
    // function printInput(){
   // return input
  //  } 
    // //return function
   // return printInput
    // }

    // // UNCOMMENT THESE TO TEST YOUR WORK!
    // const sampleFunc = createFunctionWithInput('sample');
    // console.log(sampleFunc()); // should log: 'sample'
    // const helloFunc = createFunctionWithInput('hello');
    // console.log(helloFunc()); // should log: 'hello'

//-----------------------------------------------------------------------------------------------------

//Challenge: Scoping

    // function outer() {
    // let counter = 0; // this variable is outside incrementCounter's scope
    // function incrementCounter() {
    // counter++;
    // console.log('counter', counter);
    // }
    // return incrementCounter;
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
Challenege: addByX

    // function addByX(x) {
    //create function addByX that accepts an input
    //  function addByTwo(num) {
    // //create a function that adds an input by x 
    //     return num + x;
    //   }
    //   //return function
    //     return addByTwo;
    // }
        
        
   //const addByTwo = addByX(2);
        
        
    // Now call addByTwo with an input of 1 and log the output
    //console.log(addByTwo(1))
    // Now call addByTwo with an input of 2 and log the output
    //console.log(addByTwo(2))


//-----------------------------------------------------------------------------------------------------
//Challenge: once 

    // function once(cb) {
    //write a function once that accepts a callback as input and returns a function
    //let hasBeenCalled = false;
    //store a variable that lets js know if we have run the function
    //let cachedResult;
    //create a cache that stores the output to be referenced when callback is called
       // function oncifiedCb(...args){
        //if oncifiedCb hasn't been called: 
       // if (!hasBeenCalled){
       // cachedResult = cb(...args);
        //1. invoke cb with args and store result in cachedResult
                //2. set hasBeenCalled to true
       // hasBeenCalled = true
    //     return cachedResult
    //     } else{ 
    //     return cachedResult
    //     //return cached result
    //     }   
    // }
    //     return oncifiedCb
    // }
        
        
    // const addByTwoOnce = once(function(num) {
    // return num + 2;
    // });
        
    // // UNCOMMENT THESE TO TEST YOUR WORK!
    // console.log(addByTwoOnce(5));  //should log 7
    // console.log(addByTwoOnce(10));  //should log 7
    // console.log(addByTwoOnce(9001));  //should log 7
    

//-----------------------------------------------------------------------------------------------------
// Challenge: after

// function after(numOfCalls, cb){//create function that takes two parameters
// 	//1. parameter 1 takes # of times the callback needs to be called before being executed
// 	//2. parameter 2 is the callback 
//   let count = 0; //set a counter outside inner function for that function to access
//   //closure requires us to return a function
//   return function(...args){
//count += 1;
//   // we need to define a count variable and increment it by 1
//   if (count >=numOfCalls){
//return cb(...args)
//   }
//   }
// }

// const called = function(string) { return('hello ' + string); };
// const afterCalled = after(3, called);

// // UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed


//-----------------------------------------------------------------------------------------------------

// Challenge: delay
// function delay(cb,wait){
//   function setTimeout(code, delay)
//   return setTimeout
// }

// // UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


//-----------------------------------------------------------------------------------------------------

//Challenge: saveOutput

// function saveOutput(func, pw){//remember to name func not function
//     //declare a function saveOutput 
//     const cache = {};
//       //declare an object cache that will store previous arguments and corresponding outputs
//         return function(arg){ //declare and return a function that takes an argument
//       if (arg === pw){
//           //if the argument passed is the password\
//         return cache;
//       //return cache object
//       }else{  
//       //if the argument passed is not the password, create a new entry in cache for current argument
//         cache[arg] = func(arg);
//       //the value associated with this object key will be the result of invoking the function with the argument
//       return cache[arg]
//       //return the value associated with the argument in our cache object
//       }
//       }
//   }
  
//   // Uncomment these to check your work!
//   const multiplyBy2 = function(num) { return num * 2; };
//   const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
//   console.log(multBy2AndLog(2)); // should log: 4
//   console.log(multBy2AndLog(9)); // should log: 18
//   console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

//-----------------------------------------------------------------------------------------------------

//Challenge: cycleIterator

//create a function cycleIterator that accepts an array 
// function cycleIterator(arr){
//     //create a count variable to start from
//     let index = 0;
    
//      return function (){
//         //when first invoked, return function will return the first element in the array
//        const result = arr[index++] //increment so it will return the next item in array
//        if (index >= arr.length) index = 0 //check if index variable is <= the array length. if so, reset to 0
//          return result
//       }
//      return result
//     }
    
//     //when invoked a 2nd time, will return the second element of array and so on
//     //after returning the last element in array, starts back a 1 and keeps going
//     //return a function with 0 arguments
    
    
//     // Uncomment these to check your work!
//     const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
//     const getDay = cycleIterator(threeDayWeekend);
//     console.log(getDay()); // should log: 'Fri'
//     console.log(getDay()); // should log: 'Sat'
//     console.log(getDay()); // should log: 'Sun'
//     console.log(getDay()); // should log: 'Fri'

//-----------------------------------------------------------------------------------------------------

//Challenge: defineFirstArg


//basic currying
// create a function defineFirstArg that accepts a function and argument
// function defineFirstArg(func, arg){
//     //the inner function will accept at least one arg
//         function newFunction(...additionalArgs){
//           return func(arg,...additionalArgs)//*this has to be labelled same as the first paramete in defineFirstArg
//     //return a new function that invoked the passed in function with the passed-in argument as the passed-in function's first argument
//     //Additional arguments needed by the passed-in function will need to be passed into the returned function. 
//       }
//       return newFunction
//     }
//     // Uncomment these to check your work!
//     const subtract = function(big, small) { return big - small; };
//     const subFrom20 = defineFirstArg(subtract, 20);
//     console.log(subFrom20(5)); // should log: 15

//-----------------------------------------------------------------------------------------------------

// Challenge: hobbyTracker

// function hobbyTracker(hobbies) {
//     const cache = {};
//     for ( let hobby of hobbies){
//         cache[hobby] = 0;   
//     }
//     return function(hobbies, hours) {
//               if (hobbies && hours){
//                   cache[hobbies] += hours;
//                   return cache;
//                }
//               else {
//                   for (let hobby in cache) {
//                       cache[hobby] = 0;
//                   }
//                }
//                return 'tracker has been reset!';
// }
// }

// Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

//-----------------------------------------------------------------------------------------------------

// Challenge: dateStamp

// function dateStamp(func) {
//     const logTime = {};
//     function stamping(input) {
//       logTime.date = new Date();
//       logTime.output = func(input);
//       return logTime;
//     }
//     return stamping;
//   }
  
//   // Uncomment these to check your work!
//   const stampedMultBy2 = dateStamp(n => n * 2);
//   console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
//   console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

//-----------------------------------------------------------------------------------------------------

//Challenge: censor
// function censor() {
//     const phrases = new Map();
//     function actualFn(...args) {
//       if (args.length === 2) {
//         phrases.set(args[0], args[1]);
//       } else {
//         let input = args[0];
//         for (let [key, value] of phrases) {
//           let regex = new RegExp(key, "g");
//           input = input.replace(regex, value);
//         }
//         return input;
//       }
//     }
//     return actualFn;
//   }
  
//   // Uncomment these to check your work!
//   const changeScene = censor();
//   changeScene('dogs', 'cats');
//   changeScene('quick', 'slow');
//   console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

//-----------------------------------------------------------------------------------------------------




//******************NEW SECTION: 


Challenge: 


//-----------------------------------------------------------------------------------------------------

Challenge: 



//-----------------------------------------------------------------------------------------------------


