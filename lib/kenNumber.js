/*

  Ken 넘버란, 자연수 중 인접한 자리의 숫자(digit)들의 차이가 모두 1인 자연수를 의미한다.

  12345 -> true
  43434 -> true
  67898 -> true
  12344 -> false
  12432 -> false
  36739 -> false

  Ken 넘버를 이와 같이 정의했을때, K(1 =< K =< 100,000)번째로 작은 Ken 넘버를 찾는 함수를 작성하라.

  ##### 입출력 예시

  K: 1 -> 1
  K: 2 -> 2
  K: 3 -> 3
  K: 10 -> 10
  K: 11 -> 12
  K: 12 -> 21
  K: 13 -> 23
  K: 14 -> 32
  K: 15 -> 34
  K: 16 -> 43
  K: 100 -> 6765

  < 힌트 >

  자연수를 순차적으로 탐색하기보단 특정한 규칙을 가지는 문자열로 생각해서 탐색법을 고안해보세요.
  (digit 하나를 node로 보았을때 tree의 path가 하나의 숫자와 대응)

 */

export default function kenNumber(K) {
  const root = new ConstructNode;
  let currentNode = root;
  let cachedChilren = [];
  let resultArray = [];
  let index = 0;

  constructChild(currentNode);

  while (cachedChilren.length < K + 1) {
    constructChild(cachedChilren[index++]);
  }

  return +resultArray[K];

  function constructChild(node) {
    const result = node.val;

    for (let i = 0; i <= 9; i++) {
      if (node.val === "0") {
        continue;
      }

      if (node.val === "" || Math.abs(node.val[node.val.length - 1] - i) === 1) {
        const stringNum = result + String(i)

        node.children.push(new ConstructNode(stringNum));
        cachedChilren.push(new ConstructNode(stringNum));
        resultArray.push(stringNum);
      }
    }

    return result;
  }

  function ConstructNode(num) {
    this.val = num ?? "";
    this.children = [];
  }
}
