/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let groups = {};
  let returnArr = [];
  for (const word of strs) {
    let key = getKey(word);
    if (key in groups) {
      groups[key].push(word);
    } else {
      groups[key] = [word];
    }
  }

  for (let key of Object.keys(groups)) {
    returnArr.push(groups[key]);
  }
  return returnArr;
};

// const getKey = word => {
//   let ascii = 0;
//   for (const char of word) {
//     ascii += char.charCodeAt(0);
//   }
//   console.log(ascii);
//   return ascii;
// };

const getKey = word => {
  const charArray = Array(26).fill(0);
  for (const char of word) {
    let c = char.charCodeAt(0) - "a".charCodeAt(0);
    ++charArray[c];
  }
  return charArray.join("");
};
console.log(groupAnagrams(["duh", "ill"]));
