import recessQueue from "./recessQueue";

describe("Recess Queue", () => {
  it("should result in 1", () => {
    const result = recessQueue(3, [70, 50, 60]);
    expect(result).toEqual(1);
  });

  it("should result in 3", () => {
    const result = recessQueue(5, [100, 90, 95, 85, 80]);
    expect(result).toEqual(3);
  });

  it("should result in 4", () => {
    const result = recessQueue(4, [40, 30, 20, 10]);
    expect(result).toEqual(4);
  });

  it("should result in 2", () => {
    const result = recessQueue(4, [28, 50, 100, 4]);
    expect(result).toEqual(2);
  });
});
