import { expect } from "chai";
import singleSwapSort from "../lib/singleSwapSort";

describe("Single Swap Sort", function () {
  it("should find out if the given array can be sorted in a single swap.", function () {
    expect(singleSwapSort([3, 2, 1])).to.eql(true);
    expect(singleSwapSort([4, 3, 2, 1])).to.eql(false);
    expect(singleSwapSort([1, 2, 3, 4, 5, 7, 6])).to.eql(true);
    expect(singleSwapSort([5, 1, 2, 3, 4])).to.eql(false);
    expect(singleSwapSort([1, 2, 3, 4, 5, 6])).to.eql(true);
    expect(singleSwapSort([2, 4, 12, 8, 10, 6])).to.eql(true);
    expect(singleSwapSort([6, 5, 4, 2, 1])).to.eql(false);
    expect(singleSwapSort([100, 1])).to.eql(true);
    expect(singleSwapSort([])).to.eql(true);
  });

  it("문자가 배열의 요소로 올 경우", function () {
    expect(singleSwapSort(["다","나","가"])).to.eql(true);
    expect(singleSwapSort(["가","가","가"])).to.eql(true);
    expect(singleSwapSort(["다","가","나","라"])).to.eql(false);
    expect(singleSwapSort(["가","가","라","다", "나"])).to.eql(true);
    expect(singleSwapSort(["가","가","라","다", "나", "나"])).to.eql(false);
    expect(singleSwapSort(["a","c","d","b", "e"])).to.eql(false);
    expect(singleSwapSort(["a","a","f","c", "b", "b"])).to.eql(false);
  })

  it("문자와 숫자가 같이 배열의 요소로 올 경우", function () {
    expect(singleSwapSort([1, 3, 2, "a", "b"])).to.eql(true);
    expect(singleSwapSort([3, "다", "가", 4, "라"])).to.eql(true);
    expect(singleSwapSort([5, 7, "h", 10,"a", "b","c", 9, "z"])).to.eql(true);
  })
});
