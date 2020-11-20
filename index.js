/* AH82:
  * W01D5 - (15) "Sum Array of Numbers" (STRETCH)
  * https://web.compass.lighthouselabs.ca/activities/574
  * 
  * Originally implemented during bootcamp on 2020-02-07
  * Remote repo created post-bootcamp on 2020-11-20 (due forgotton forking error and time constrains)
  * Code comments left intentionally for learning/archving purposes
*/

const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  // console.log("the line 1 sum:", sum );

  array.forEach(item => {

    if (Array.isArray(item)) {
      //recursive case
      // console.log("Sum under if : before: ",sum);

      sum = sum + sumItems(item);
      // console.log("sum under if : the after : ",sum);

      
    } else {
      // base case
      // console.log("sum under else : BEFORE :", sum);
      
      sum += item;
      // console.log("sum under else : AFTER :", sum);
    }
  });
  return sum;
};
// console.log( " expected [1, 2, 3, 4, 5] => 15... actual sum: => ", sumItems([1, 2, 3, 4, 5]))
// console.log( " expected [[1, 2, [[3], 4]], 5, []] => 15... actual sum: => ", sumItems([[1, 2, [[3], 4]], 5, []]))
// console.log( " expected[[[[[[[[[[[[[1]]]]]]]]]]]]] => 1... actual sum: => ", sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]))

module.exports = sumItems;