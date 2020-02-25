// const checkPaliandrome = s => {
//   // O(n)
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     if (s[i] !== s[l - i - 1]) return false;
//   }
//   return true;
// };

// brute force

// const longestPalindrome = s => {
//   let best_length = 0;
//   let best_string = "";
//   let n = s.length;

//   for (let L = 0; L < n; L++) {
//     //O(n)
//     for (let R = L; R < n; R++) {
//       //O(n) * O(n)
//       let sub_n = R - L + 1;
//       let sub = s.substr(L, sub_n);
//       //console.log(sub, sub_n, " => ", best_length);
//       if (sub_n > best_length && checkPaliandrome(sub)) {
//         best_length = sub_n;
//         best_string = sub;
//       }
//     }
//   }

//   return best_string;
// };

const longestPalindrome = s => {
  let best_length = 0;
  let best_l = 0;
  let n = s.length;

  for (let mid = 0; mid < n; mid++) {
    for (let x = 1; mid - x >= 0 && mid + x < n; x++) {
      if (s[mid - x] !== s[mid + x]) {
        break;
      }
      let len = 2 * x + 1;
      if (len > best_length) {
        best_length = len;
        best_l = mid - x;
      }
    }
  }

  for (let mid = 0; mid < n - 1; mid++) {
    for (let x = 0; mid - x + 1 >= 0 && mid + x < n; x++) {
      if (s[mid - x + 1] !== s[mid + x]) {
        break;
      }
      let len = 2 * x;
      if (len > best_length) {
        best_length = len;
        best_l = mid - x + 1;
      }
    }
  }

  return s.substr(best_l, best_length);
};

console.log(longestPalindrome("mcvid abttba hiquy"));

// Manachers Algorithm
// c - j = j' - c
// So, mirror index of j:
// j' = (2 * c) - j
