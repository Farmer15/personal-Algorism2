import { expect } from "chai";
import findMaxMultiplication from "../lib/findMaxMultiplication";

describe("Find Maximum Multiplication", function () {
  it("should pass base cases", function () {
    expect(findMaxMultiplication(10)).to.eql([6, 4]);
    expect(findMaxMultiplication(14)).to.eql([5, 8]);
  });

  it("should pass base cases", function () {
    expect(findMaxMultiplication(13)).to.eql([7, 6]);
    expect(findMaxMultiplication(100)).to.eql([6, 32]);
    expect(findMaxMultiplication(1234)).to.eql([6, 80]);
    expect(findMaxMultiplication(1000000)).to.eql([6, 7776]);
  });
});
