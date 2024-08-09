import { expect } from "chai";
import seatFinder from "../lib/seatFinder";

describe("seatFinder", function () {
  it("should pass base cases", function () {
    expect(seatFinder(2, "1A 2F 1C")).to.eql(2);
    expect(seatFinder(1, "1A 1D 1H")).to.eql(0);
    expect(seatFinder(1, "")).to.eql(2);
    expect(seatFinder(2, "")).to.eql(4);
  });

  it("should pass base cases2", function () {
    expect(seatFinder(3, "1A 1K 2A 2K 3A 3K")).to.eql(6);
    expect(seatFinder(3, "1C 1G 2C 2G 3C 3G")).to.eql(0);
    expect(seatFinder(0, "")).to.eql(0);
    expect(seatFinder(4, "1E 1J 2D 2G 3F 3G 4C 4H")).to.eql(2);
  });
});
