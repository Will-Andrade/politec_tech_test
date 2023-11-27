const createStack = (input: number): number[] => {
  let stack: number[] = [];
  
  for (let i = 1; i <= input; i++) {
    stack.push(i);
  }

  return stack;
};

const throwAwayCards = (input: number): { discarded: number[], remainder: number } | void => {
  let stack = createStack(input);
  let remainder = 0;
  let discarded: number[] = [];
  let auxiliary: number | undefined = 0;

  if (input === 0) return;

  while (stack.length > 1) {
    auxiliary = stack.shift();

    if (auxiliary) {
      discarded.push(auxiliary);
    }

    auxiliary = stack.shift();

    if (auxiliary) {
      stack.push(auxiliary);
    }
  }

  remainder = stack[0];

  return {
    discarded,
    remainder
  }  
};

export default throwAwayCards;
