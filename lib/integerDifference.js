/*
 *
 * Write a function that accepts an array of random integers and an integer n.
 * Determine the number of times where two integers in the array have the difference of n.
 *
 * < Examples >
 *
 * f(4, [1, 5, 6, 9, 16, 27]) // 2   (Due to [1, 5], and [5, 9])
 * f(2, [1, 3, 5, 4])         // 2   (Due to [1, 3], [3, 5])
 *
 */

export default function integerDifference(n, array) {
  const obj = {};
  for (const index1 in array){
    for(const index2 in array){
      const interval = Math.abs(array[index1] - array[index2]);
      if(index1 < index2){
        obj[interval] ?
        obj[interval]++ :
        obj[interval] = 1;
      }
    }
  }
  return obj[n] ?? 0;
}
