import { expect } from "chai";
import getStatusCode from "../lib/getStatusCode";

describe("Get Status Code", function () {
  it("should pass base cases", function () {
    expect(
      getStatusCode(
        ["123.023.123.123", "1.1.1.12", "119.123.45.39", "127.0.0.1"],
        ["119.123.45.39"],
        ["1.1.1.12"]
      )
    ).to.eql([1, 3, 0, 2]);
    expect(
      getStatusCode(
        ["115.86.56.15", "123.12.2.1.", "...", "255.255.1.256"],
        ["115.86.56.15"],
        ["123.12.2.1"]
      )
    ).to.eql([0, 1, 1, 1]);
  });

  it("should pass base cases2", function () {
    expect(
      getStatusCode(
        ["12.73.253.1", "1.2.3.4", "0.0.0.0", "1,2.3.4", "1.2.3.4.5", "0.072.244.4"],
        ["12.73.253.1", "1.2.3.4"],
        ["0.0.0.0"]
      )
    ).to.eql([0, 0, 3, 1, 1, 1]);
  });
});
