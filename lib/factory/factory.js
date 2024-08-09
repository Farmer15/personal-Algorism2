/*

  문제 설명은 README를 참고하세요.

 */

export default function factory(needs, r) {
  const filteredNeeds = needs.filter((rowArray) => {
    return rowArray.reduce((sum, element) => sum + element, 0) <= r ;
  });

  const sumColum = filteredNeeds[0].map((_,index) => {
    return filteredNeeds.reduce((sum, rowArray) => sum + rowArray[index], 0)
  });

  let count = r;
  const topR = [...sumColum].sort((a, b) => b - a)[r - 1];
  const topRArray = sumColum.map((element) => element >= topR && count-- >0 ? 1 : 0);

  return filteredNeeds.reduce((sumFinished, rowArray) => {
    if (topRArray.every((element, index) => element || !rowArray[index])) {
      return sumFinished + 1;
    } else {
      return sumFinished;
    }
  }, 0);
}
