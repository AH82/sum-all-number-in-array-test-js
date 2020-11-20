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