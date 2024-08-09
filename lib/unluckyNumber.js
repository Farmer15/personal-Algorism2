/*

  4, 13, 413, 134와 같이 숫자가 13과 4를 이용해서 만들 수 있는 수를 불행한 수(Unlucky Number)라고 정의하겠습니다.
  그리고 불행한 수가 오름차순으로 나열된 수열을 불행한 수열이라고 하겠습니다.

  예를 들면 불행한 수열은 다음과 같이 나열될 수 있습니다.

  S = {4, 13, 44, 134, 413, 444, 1313…. }

  n이 매개변수로 주어질 때, 불행한 수열에서 n번째 불행한 수를 return 하도록 함수를 완성해주세요.

  < 제한 사항 >
  - n은 5,000 이하의 자연수입니다.

  < 입출력 예시 #1 >
  n: 1
  result: 4

  < 입출력 예시 #2 >
  n: 2
  result: 13

  < 입출력 예시 #3 >
  n: 3
  result: 44

 */
export default function unluckyNumber(n) {
  const resultArray = ["4", "13"];

  for (let i = 0; resultArray.length <= n; i++) {
    if (!resultArray.includes(resultArray[i] + "4")) {
      resultArray.push(resultArray[i] + "4");
    }

    if (!resultArray.includes(resultArray[i] + "44")) {
      resultArray.push(resultArray[i] + "44");
    }

    resultArray.push(resultArray[i] + "13");
  }

  return +resultArray.sort((a, b) => a - b)[n - 1];
}
