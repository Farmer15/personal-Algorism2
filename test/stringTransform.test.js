import { expect } from "chai";
import transformString from "../lib/stringTransform";

describe("String Transformation", function () {
  it("should return a possible transformation of the given string.", function () {
    expect(transformString("AABBCC")).to.eql("AC");
    expect(transformString("ABAACBCCABABACBCCABAA")).to.eql("ACACA");
    expect(transformString("AAAAAAA")).to.eql("A");
    expect(transformString("BBBBBBB")).to.eql("BBBBBBB");
    expect(transformString("CCCCCCC")).to.eql("C");
  });

  it("아주 긴 문자열와도 가능하게", function () {
    expect(transformString("B".repeat(10000))).to.eql("B".repeat(10000));
    expect(transformString("C".repeat(10000))).to.eql("C");
    expect(transformString("AACC".repeat(10000))).to.eql("AC".repeat(10000));
  });

  it("문자열이 아닌 다른 원시값이 들어올 경우", function () {
    expect(transformString(5)).to.eql("문자열이 아닙니다");
    expect(transformString([1, 2, 3])).to.eql("문자열이 아닙니다");
    expect(transformString({name : "ken"})).to.eql("문자열이 아닙니다");
    expect(transformString(false)).to.eql("문자열이 아닙니다");
  })
});
