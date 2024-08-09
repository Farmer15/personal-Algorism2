/*

  문제 설명은 README를 참고하세요.

 */

export default function postfixExpression(P) {
  const resultArray = [];

  for (let i = 0; i < P.length; i++) {
    if (Number(P[i]) === Number(P[i])) {
      resultArray.push(P[i]);
      continue;
    }

    const [rightNum, leftNum] = [+resultArray.pop(), +resultArray.pop()];

    switch (P[i]) {
      case "+":
        resultArray.push(leftNum + rightNum);
        break;

      case "-":
        resultArray.push(leftNum - rightNum);
        break;

      case "*":
        resultArray.push(leftNum * rightNum);
        break;

      case "/":
        resultArray.push(leftNum / rightNum);
        break;
    }
  }

  return resultArray[0];
}
