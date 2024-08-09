import { expect } from "chai";
import multiFactorial from "../lib/multiFactorial/multiFactorial";

describe("Multi Factorial", function () {
  it("should pass base cases", function () {
    expect(multiFactorial("5!")).to.eql(120);
    expect(multiFactorial("20!!!")).to.eql(4188800);
    expect(multiFactorial("20!!!!")).to.eql(122880);
  });

  it("should pass base cases2", function () {
    expect(multiFactorial("0!")).to.eql(1);
    expect(multiFactorial("5!!!!!")).to.eql(5 * 1);
    expect(multiFactorial("10!!!!!!!!!!")).to.eql(10 * 1);
    expect(multiFactorial("10!!!!!")).to.eql(10 * 5 * 1);
    expect(multiFactorial("15!!")).to.eql(15 * 13 * 11 * 9 * 7 * 5 * 3 * 1);
    expect(multiFactorial("15!")).to.eql(15 * 14 * 13 * 12 * 11 * 10 * 9 *  8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
    expect(multiFactorial("13!!!!")).to.eql(13 * 9 * 5 * 1);
  });
});
