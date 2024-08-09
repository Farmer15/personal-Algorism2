/*

  개미수열은 다음과 같은 수열입니다. (이 수열은 소설 개미에서 소개되었기 때문에 "개미 수열"이라고 불립니다.)

   1, 11, 12, 1121, 122111 .....

   이 수열은 앞의 수의 연속된 같은 숫자를 묶어서 숫자와 그 개수를 읽는 방식으로 만들어집니다.

   - 1을 1이 한 개 혹은 11로 읽습니다.
   - 11을 1이 두 개 혹은 12로 읽습니다.
   - 12를 1이 한 개, 2가 한 개 혹은 1121로 읽습니다.
   - 1121을 1이 두 개, 2가 한 개, 1이 한 개 혹은 122111로 읽습니다.
   - 이와 같은 방법으로 계속해서 다음 수를 만들어 갑니다.

   입력으로 n 이 주어질 때 n번째 개미 수열을 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

   ##### 제한사항

   - n은 40이하의 자연수입니다.

   ------

   ##### 입출력 예

   | n    | result |
   | ---- | ------ |
   | 2    | 11     |
   | 5    | 122111 |

   ##### 입출력 예 설명

   입출력 예 #1
   1, 11 ...로 두 번째인 11을 반환합니다.

   입출력 예 #2
   1, 11, 12, 1121, 122111 ...로 다섯 번째인 122111을 반환합니다.

 */

export default function antSequence(n) {
  if (n < 1 || typeof n !== "number" || n !== n) {
    return "양의 정수가 들어와야합니다";
  }

  let recursiveCount = n - 1;

  return n === 1 ? "1" : makeAnt("1");

  function makeAnt(str) {
    let numCount = 0;
    let confirmNum = str[0];
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
      if (confirmNum === str[i]) {
        numCount++;
      }

      if (confirmNum !== str[i]) {
        resultStr += confirmNum + numCount;
        numCount = 1;
        confirmNum = str[i];
      }
    }

    if (recursiveCount > 1) {
      recursiveCount--;
      return makeAnt(resultStr + confirmNum + numCount);
    }

    return resultStr + confirmNum + numCount;
  }
}
