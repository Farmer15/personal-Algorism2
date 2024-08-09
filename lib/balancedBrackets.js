/**
 *
 * Detect if the given brackets are balanced
 *
 * balancedBrackets('({[]})({[]})');    // true
 *
 * balancedBrackets('{([)]}');          // false
 *
 *
 */

export default function balancedBrackets(input) {
  const bracketsArray = ["(", "{", "[", ")", "}", "]"];
  const bracketsStorage = [];

  for (let i = 0; i < input.length; i++) {
    const isIndexInterval3 = findIndex(bracketsArray, input[i]) - findIndex(bracketsArray, bracketsStorage[bracketsStorage.length - 1]) === 3;

    if (isIndexInterval3) {
      bracketsStorage.length--;
    } else {
      bracketsStorage[bracketsStorage.length] = input[i];
    }
  }

  if (bracketsStorage.length === 0) {
    return true;
  }

  return false;

  function findIndex(arr, char) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === char) {
        return i;
      }
    }
  }
}
