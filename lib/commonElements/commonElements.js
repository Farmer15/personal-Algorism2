/*

  문제 설명은 README를 참고하세요.

 */

export default function findCommonElements(arr1, arr2, arr3) {
  const ObjArr1 = {};
  const ObjArr2 = {};
  const ObjArr3 = {};
  let duplicatedKey = -1;

  for (const element of arr1) {
    ObjArr1[element] = true;
  }

  for (const element of arr2) {
    ObjArr2[element] = true;
  }

  for (const element of arr3) {
    ObjArr3[element] = true;
  }

  for (const num in ObjArr1) {
    if (ObjArr2[num] && ObjArr3[num] && num > duplicatedKey) {
      duplicatedKey = +num;
    }
  }

  return duplicatedKey;
}
