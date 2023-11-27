const orderGrades = (arrInput: number[]): number[] => {
  let arrCopy = arrInput.map(num => num);

  for (let i = 0; i < arrCopy.length - 1; i++) {
    for (let j = 0; j < arrCopy.length - 1 - i; j++) {
      if (arrCopy[j] < arrCopy[j + 1]) {
        [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
      }
    }
  }

  return arrCopy;
};

const recessQueue = (N: number, M: number[]): number => {
  let orderedGrades: number[] = orderGrades(M);

  const result = orderedGrades.reduce((acc: number, orderedGrade: number, index: number): number => {
    if (orderedGrade === M[index]) {
      acc++;
    }

    return acc;
  }, 0);

  return result;
};

export default recessQueue;
