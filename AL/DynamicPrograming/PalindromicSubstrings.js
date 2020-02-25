const countSubstrings = s => {
  if (s === null || s.length <= 0) return 0;
  let l = s.length;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res = expandArroundCneter(i, i, l, s, res);
    res = expandArroundCneter(i, i + 1, l, s, res);
  }
  return res;
};

const expandArroundCneter = (left, right, len, str, res) => {
  let r = res;
  if (len === 0 || left > right) return 0;
  while (left >= 0 && right < len && str[left] === str[right]) {
    left--;
    right++;
    r++;
  }
  return r;
};

console.log(countSubstrings("aaa"));
