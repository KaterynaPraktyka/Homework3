// ---------------- 1
describe("task 1 suite", function () {
  it("computes correct sum of the two given integers", function () {
    let x = 3;
    let y = 4;
    expect(x + y).toEqual(7);
  });
});

// ---------------- 2
describe("task 2 calculator suite", function () {
  it("computes correct sum of the two given integers", function () {
    let x = 3;
    let y = 4;
    expect(x + y).toEqual(7);
  });

  it("computes correct multiply of the two given integers", function () {
    let x = 3;
    let y = 4;
    expect(x * y).toEqual(12);
  });

  it("computes correct division of the two given integers", function () {
    let x = 12;
    let y = 4;
    expect(x / y).toEqual(3);
  });

  it("computes correct divination of the two given integers", function () {
    let x = 3;
    let y = 4;
    expect(x - y).toEqual(-1);
  });
});

// ---------------- 3
function task3(x, y) {
  if (x === 50 || y === 50)
    return true;

  if (x + y === 50)
    return true;

  return false;
}

-describe("task 3 suite", function () {
  it("verify program that compare two given numbers return true if one of the number is 50 or if their sum is 50", function () {

    expect(task3(50, 0)).toBeTruthy();
    expect(task3(0, 50)).toBeTruthy();
    expect(task3(25, 25)).toBeTruthy();
    expect(task3(4, 10)).toBeFalsy();
    expect(task3(44, 10)).toBeFalsy();
  });
});
