import { expect } from "chai";
import bombs from "../lib/bomb";

describe("Bombs", function () {
  it("should pass base cases", function () {
    expect(bombs([3, 1, 2, 4])).to.eql(4);
    expect(bombs([2, 2, 2, 2])).to.eql(2);
  });

  it("should pass base cases2", function () {
    expect(bombs([4, 4, 4, 4])).to.eql(4);
    expect(bombs([1, 0, 0, 0])).to.eql(1);
    expect(bombs([0, 1, 2 ,3])).to.eql(3);
    expect(bombs([0, 0, 0, 0])).to.eql(0);
  });
});
