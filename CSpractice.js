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

