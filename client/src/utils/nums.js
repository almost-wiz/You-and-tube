const data = [
  {
    postfix: "k",
    number: 1e3,
  },
  {
    postfix: "m",
    number: 1e6,
  },
  {
    postfix: "b",
    number: 1e9,
  },
  {
    postfix: "t",
    number: 1e12,
  },
].sort((a, b) => a.number - b.number);

export const getMinimizedNum = (num) => {
  const item = data.reduce((r, i) => {
    if (num >= i.number) {
      r = i;
    }
    return r;
  }, false);

  return !item ? num : (num / item.number).toFixed(1) + item.postfix;
};
