import { expect } from "chai";
import specialLock from "../lib/specialLock";

describe("Special Lock", function () {
  it("should pass base cases", function () {
    expect(specialLock("82195", "64723")).to.eql(13);
    expect(specialLock("00000000000000000000", "91919191919191919191")).to.eql(
      20
    );
  });

  it("should pass base cases2", function () {
    expect(specialLock("000", "009")).to.eql(1);
    expect(specialLock("555", "000")).to.eql(15);
    expect(specialLock("1234", "123")).to.eql(false);
    expect(specialLock("1234", "12345")).to.eql(false);
    expect(specialLock("0".repeat(6000000), "5".repeat(6000000))).to.eql(30000000);
  });
});
