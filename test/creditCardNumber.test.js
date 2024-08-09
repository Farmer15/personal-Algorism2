import { expect } from "chai";
import creditCardNumber from "../lib/creditCardNumber/creditCardNumber";

describe("Credit Card Number", function () {
  it("should pass base cases", function () {
    expect(
      creditCardNumber([
        "3285-3764-9934-2453",
        "3285376499342453",
        "3285-3764-99342453",
        "328537649934245",
        "3285376499342459",
        "3285-3764-9934-2452",
      ])
    ).to.eql([1, 1, 0, 0, 0, 0]);
  });

  it("should pass base cases2", function () {
    expect(
      creditCardNumber([
        "3285-3764",
        "3285376a99342453",
        "3285-3764-9934-1234-",
        "32853764993424-",
        "32I5-3764-9934-2459",
        "0000000000000000000",
      ])
    ).to.eql([0, 0, 0, 0, 0, 0]);
  });
});
