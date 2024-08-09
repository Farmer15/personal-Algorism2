/*
 *
 * Given a number, find the next higher number using only the digits in the given number.
 *
 * < Examples >
 *
 * f(1234)  // 1243
 *
 */

export default function nextHighestNumber(number) {
  function compareNumber(num1, num2){
    const num1Array = Array.from(String(Math.abs(num1)));
    const num2Array = Array.from(String(Math.abs(num2)));

    return num1Array.sort().join("") === num2Array.sort().join("");
  }

  const numberArray = Array.from(String(number));
  const isSame = numberArray.sort(function(a, b){ return b - a; }).join("") === String(number);
  const isSame2 = numberArray.sort( ).join("") === String(number);
  if (isSame && number >= 0) {
    return number;
  }

  if (isSame2 && number < 0) {
    return -number;
  }

  let result = number + 9;
  while (!compareNumber(number, result)) {
    result += 9;
  }

  return result;
}

