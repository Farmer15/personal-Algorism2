/*
 *
 * Find out if a string is a rotation of another string.
 *
 * < Examples >
 *
 * isRotation("ABCD", "BCDA"); // true
 * isRotation("ABCD", "ACBD"); // false
 *
 */

export default function isRotation(a, b) {
  function pushFirstStringToEnd(str) {
    let result = "";

    for (const index in str) {
      if(index > 0){
        result += str[index]
      }
    }

    return result + str[0];
  }

  for (let i = 0; i < a.length ; i++) {
    if(pushFirstStringToEnd(a) === b) {
      return true;
    }

    a = pushFirstStringToEnd(a);
  }

  return a === "" && b === "";
}