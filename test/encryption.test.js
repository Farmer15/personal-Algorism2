import { expect } from "chai";
import encryption from "../lib/encryption";

describe("Encryption", function () {
  it("should pass base cases", function () {
    expect(encryption("hello", "cbvvu")).to.eql(true);
    expect(encryption("hello", "bbvmu")).to.eql(false);
    expect(encryption("world", "abcde")).to.eql(true);
  });

  it("should pass base cases2", function () {
    expect(encryption("a", "cbvvu")).to.eql(false);
    expect(encryption("abdce", "a")).to.eql(false);
    expect(encryption("aaaaa", "bbbbb")).to.eql(true);
    expect(encryption("aababab", "ooioioo")).to.eql(false);
    expect(encryption("abcde", "ccccc")).to.eql(false);
    expect(encryption("aaaaa", "abcdef")).to.eql(false);
  });
});
