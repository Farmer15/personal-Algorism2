import { expect } from "chai";
import challenge from "../lib/challenge";

describe("Challenge", function () {
  it("should pass base cases", function () {
    expect(challenge(7, [1, 3, 6], [2, 1, 4, 6])).to.eql([1, 2, 2]);
    expect(challenge(10, [1, 2, 3, 4, 5], [7, 8, 9])).to.eql([5, 3, 0]);
  });

  it("should return false when A,B answer count over total problem count", function () {
    expect(challenge(5, [1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9, 10])).to.eql(false);
    expect(challenge(10, [1, 2, 3, 4, 5, 6, 13], [9, 10, 14, 17])).to.eql(false);
  });

  it("should return false when A,B Array has wrong form", function () {
    expect(challenge(5, [1, 2, 2, 3, 4], [2, 5, 4, 4])).to.eql(false);
    expect(challenge(8, [7, 4, 2, 6, 7, 3], [1, 2, 5, 6, 3, 2])).to.eql(false);
  });
});
