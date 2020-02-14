const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 118.8 when passed 90", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 15 when passed 30", () => {
    expect(utils.makeHalfPrice(30)).toBe(15);
  });
});

describe("utils.countBooks", () => {
  test("returns total number of books", () => {
    expect(utils.countBooks(["xx", "xy", "xz"])).toBe(3);
  });
});
describe("utils.isInStock", () => {
  test("returns true if title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock(book)).toBe(true);
  });
});
describe("utils.isOutOfStock", () => {
  test("returns true if title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
    expect(utils.isOutOfStock(book)).toBe(false);
  });
});
describe("utils.getTotalOrderPrice", () => {
  test("returns the total price with VAT applied", () => {
expect(utils.getTotalOrderPrice(18,2)).toBe(43.2);
  });
});
