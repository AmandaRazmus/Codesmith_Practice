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
