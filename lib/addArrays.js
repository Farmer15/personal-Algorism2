/*
 * Given two arrays of positive integers,
 * add their elements into a new array.
 * The solution should add both arrays,
 * one by one starting from the 0'th index,
 * and split the sum into individual digits if it is a 2–digit number.
 *
 * Input : [23, 5, 2, 7, 87], [4, 67, 2, 8]
 * Output: [2, 7, 7, 2, 4, 1, 5, 8, 7]
 *
 * Input : [], [4, 67, 2, 8]
 * Output: [4, 6, 7, 2, 8]
 *
 */

export default function addArrays(arrayA, arrayB) {
  function findMax(arr1, arr2){
    if (arr1.length >= arr2.length){
      return arr1;
    } else {
      return arr2;
    }
  }

  let newArr = [];
  let resultArr = [];

  for (let i = 0; i < findMax(arrayA,arrayB).length; i++){
    newArr[i] = (arrayA[i] ?? 0) + (arrayB[i] ?? 0);
  }

  for (let j = 0; j < String(newArr).length; j++ ){
    if (+String(newArr)[j] !== +String(newArr)[j]){
      continue;
    } else {
      resultArr[resultArr.length] = +String(newArr)[j];
    }
  }

  return resultArr;
}

