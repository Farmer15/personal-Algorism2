/*
 *
 * 주어진 배열 내의 모든 문자열이 가장 긴 문자열의 길이와
 * 동일한 길이를 가지도록 하고 싶습니다.
 *
 * 만약 어떤 문자열의 길이가 가장 긴 문자열의 길이보다 짧다면,
 * 길이가 가장 긴 문자열의 길이와 같아 질때 까지,
 * 그 문자열의 앞에 빈 문자를 추가합니다.
 *
 * 위 규칙대로 변환된 문자열 배열을 반환하는 함수를 작성하세요.
 *
 * < 제약 >
 * - 배열의 요소인 문자열은 영문 대문자 만으로 구성됩니다.
 * - 배열의 요소인 문자열의 길이는 1이상 50이하입니다.
 *
 * < Examples >
 *
 * syncStringLength([ "AAA", "BBBBB", "CC" ]); // [ "  AAA", "BBBBB", "   CC" ]
 *
 */

export default function syncStringLength(array) {
  function addGapInFront(string, each) {
    let result = "";

    while (each > 0) {
      result += " ";
      each--;
    }

    return result + string;
  }

  let longest = 0;

  for (const element of array) {
    if (element.length > longest) {
      longest = element.length;
    }
  }

  for (const index in array) {
    array[index] = addGapInFront(array[index], longest - array[index].length);
  }

  return array;
}

