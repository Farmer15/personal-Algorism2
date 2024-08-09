import { expect } from "chai";
import calculateNumberBox from "../lib/numberBox";

describe("calculateNumberBox function", function () {
  it("should pass base cases", function () {
    expect(calculateNumberBox([4, 2, 1, 3])).to.eql(73);
    expect(calculateNumberBox([9, 6, 1])).to.eql(97);
    expect(calculateNumberBox([2, 2, 2])).to.eql(24);
    expect(calculateNumberBox([9, 1, 1, 1, 1, 9, 9, 1])).to.eql(284);
  });

  it("should pass base cases2", function () {
    expect(calculateNumberBox([9])).to.eql(9);
    expect(calculateNumberBox(Array.from({length: 99999}, () => 9))).to.eql(4949910);
  });
});
