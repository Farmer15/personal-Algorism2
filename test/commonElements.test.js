import { expect } from "chai";
import findCommonElements from "../lib/commonElements/commonElements";

describe("Common Elements", function () {
  it("should pass base cases", function () {
    expect(
      findCommonElements(
        [10, 20, 51, 66, 78, 99, 99],
        [5, 6, 20, 35, 44, 66, 100, 200],
        [1, 2, 10, 20, 40, 50, 66, 77]
      )
    ).to.eql(66);
    expect(
      findCommonElements(
        [1, 3, 5, 7, 9, 11, 11],
        [1, 2, 3, 3, 4, 5, 6, 7],
        [2, 4, 6, 6, 8, 10, 12, 14, 16]
      )
    ).to.eql(-1);
  });

  it("should pase test when given not sorted arr1, arr2, arr3", function () {
    expect(
      findCommonElements(
        [5, 3, 1, 63, 22, 41, 21, 73],
        [2, 8, 98, 21, 46, 82, 74, 15, 99],
        [4, 1, 78, 54, 29, 83, 66, 33, 85, 21]
      )
    ).to.eql(21);

    expect(
      findCommonElements(
        [130, 569, 25, 56, 111, 894, 5789, 2109, 4611],
        [8329, 123, 5789, 25, 653, 7321, 652, 34, 67, 273],
        [25, 5162, 424262, 234, 1255, 3, 125, 46, 5789, 211, 6783321, 111]
      )
    ).to.eql(5789);

    expect(
      findCommonElements(
        [6, 2, 19, 71, 42, 59, 90, 83, 23],
        [2, 7, 93, 21, 75, 83, 27, 64, 18, 73],
        [7, 3, 1, 89, 54, 73, 34, 78, 95, 22, 15]
      )
    ).to.eql(-1);
  });
});
