const generateParenthesis = (n) => {
  const res = [];

  generate(res, n - 1, n);

  return res;
};

const generate = (res, l, r, s = "(") => {
  if (l === 0 && r === 0) {
    res.push(s);
    return;
  }

  if (l) {
    generate(res, l - 1, r, s + "(");
  }

  if (r && r > l) {
    generate(res, l, r - 1, s + ")");
  }
};
