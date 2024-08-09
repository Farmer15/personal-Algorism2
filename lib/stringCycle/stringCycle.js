/*

  문제 설명은 README를 참고하세요.

 */

export default function stringCycle(s) {
  if (s.length === 0) {
    return 0;
  }

  let resultLength = 1;

  while (!hasCycle(s, resultLength)) {
    resultLength++;
  }

  return resultLength;

  function hasCycle(str, num) {
    if (str.length % num !== 0) {
      return false;
    }

    let confirmStr = "";
    let resultStr = "";

    for (let i = 0; i < num; i++) {
      confirmStr += str[i];
    }

    while (resultStr.length !== str.length) {
      resultStr += confirmStr;
    }

    return resultStr === str;
  }
}
