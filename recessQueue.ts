const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

const recessQueue = (N: number, M: number[]): number => {
  let orderedGrades: number[] = mergeSort(M);

  const result = orderedGrades.reduce((acc: number, orderedGrade: number, index: number): number => {
    if (orderedGrade === M[index]) {
      acc++;
    }

    return acc;
  }, 0);

  return result;
};

export default recessQueue;
