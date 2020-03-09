const m = [
  [0, 0],
  [0, 0]
];

const n = [
  [1, 1],
  [1, 1]
];

const serialize = mat => {
  let value = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      value = (value << 1) + mat[i][j];
      console.log(value);
    }
  }
  return value;
};

console.log(serialize(m));
// console.log(serialize(m));
