var assert = require("chai").assert;
var check = require("../check");

describe("Luhn Algorith", function() {
  it("should return true if passes the test", function() {
    var number = "1234567897"; // word to test
    var result = check(number); // result runs the test
    assert.isTrue(result); // tests for quality
  });

  it("should return false if fails the test", function() {
    var number = "1234567894";
    assert.isFalse(check(number));
  });
});
