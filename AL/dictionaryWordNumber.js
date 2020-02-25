const getNumber = word => {
  const dictionary = {
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"]
  };

  const tempD = {};
  let ret = "";
  for (const c of word) {
    if (c in tempD) {
      ret += tempD[c];
      continue;
    }
    for (const key in dictionary) {
      if (dictionary[key].join("").includes(c)) {
        tempD[c] = key;
        ret += key;
      }
    }
  }
  return ret;
};

const printAllWords = digits => {
  if (digits === 0 || digits === null)
    throw new Error("number should be valid positive integer");

  const dictionary = {
    0: [],
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["k", "l", "m"],
    6: ["n", "o", "p"],
    7: ["q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["x", "y", "z"]
  };

  const res = [];

  const printAll = (res, current, index, digit, map) => {
    if (index === digit.length) {
      res.push(current);
      return;
    }

    let key = Number(digit[index]);
    let alphabets = map[key];
    if (alphabets.length > 0) {
      for (const a of alphabets) {
        printAll(res, current + a, index + 1, digits, map);
      }
    } else {
      printAll(res, current, index + 1, digits, map);
    }
  };

  printAll(res, "", 0, digits.toString(), dictionary);
  return res;
};
console.log(printAllWords("123"));
