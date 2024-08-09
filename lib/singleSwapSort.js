/*
 *
 * 주어진 array가 단 한번의 swap으로 non-decreasing order로 sort될 수 있다면 true, 그렇지 않다면 false를 반환하는 함수를 작성하세요.
 *
 * 단, 중복 요소는 없습니다.
 *
 * < Examples >
 *
 * singleSwapSort([3, 2, 1]); // true - 3과 1을 바꾸는 swap
 * singleSwapSort([4, 3, 2, 1]); // false
 *
 */

export default function singleSwapSort(array) {
  if (isAscending(array)) {
    return true;
  }

  for (const index1 in array) {
    for (const index2 in array) {
      if (index1 < index2) {
        changeElement(array, index1, index2);
        if (isAscending(array)) {
          return true;
        } else {
          changeElement(array, index1, index2);
        }
      }
    }
  }

  return false

  function isAscending(arr) {
    for (const index1 in arr){
      for(const index2 in arr) {
        if (index1 < index2) {
          if (arr[index1] > arr[index2]) {
            return false;
          }
        }
      }
    }

    return true;
  }

  function changeElement(arr, index1, index2) {
    const temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr
  }
}
