import { expect } from "chai";
import manipulateGrades from "../lib/manipulateGrades";

describe("Manipulate Grades", function () {
  it("should pass base cases", function () {
    expect(manipulateGrades([2, 1, 3])).to.eql(1);
    expect(manipulateGrades([1, 2, 3])).to.eql(0);
    expect(manipulateGrades([3, 2, 3, 6, 4, 5])).to.eql(3);
  });

  it("should pass base cases2", function () {
    expect(manipulateGrades([3, 2, 3, 6, 1, 5])).to.eql(10);
    expect(manipulateGrades([1, 1, 1, 1, 1, 1])).to.eql(0);
    expect(manipulateGrades([5, 4, 3, 2, 1, 0])).to.eql(15);
    expect(manipulateGrades([0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0])).to.eql(36);
    expect(manipulateGrades([10, 8, 5, 8, 10])).to.eql(8);
    expect(manipulateGrades([10, 1, 5, 1, 10])).to.eql(13);
  });
});
