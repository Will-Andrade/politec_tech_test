import throwAwayCards from "./throwAwayCards";

describe('Throw away cards exercise', () => {
  it('should return undefined with input equal to zero', () => {
    const result = throwAwayCards(0);
    expect(result).toBeUndefined();
  });

  it('should return the input itself it equal to 1', () => {
    const result = throwAwayCards(1);
    expect(result).toEqual({
      discarded: [],
      remainder: 1
    });
  });

  it('should have remainder equal to 6 if input is equal to 7', () => {
    const result = throwAwayCards(7);
    expect(result).toEqual({
      discarded: [1, 3, 5, 7, 4, 2],
      remainder: 6,
    });
  });

  it('should have remainder equal to 8 if input is equal to 8', () => {
    const result = throwAwayCards(8);
    expect(result).toEqual({
      discarded: [1, 3, 5, 7, 2, 6, 4],
      remainder: 8,
    });
  });

  it('should have remainder equal to 12 if input is equal to 22', () =>{
    const result = throwAwayCards(22);
    expect(result).toEqual({
      discarded: [1,  3,  5,  7,  9, 11, 13, 15, 17, 19, 21,  2,  6, 10, 14, 18, 22,  8, 16,  4, 20],
      remainder: 12
    });
  })
});
