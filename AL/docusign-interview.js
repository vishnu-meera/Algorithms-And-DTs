// I was composing a fun message, using characters of the string.
function canBuild(message, string) {
  let mDict = {}; //52
  let strDict = {}; //52

  for (const char of string) {
    if (char in strDict) {
      strDict[char] += 1;
    } else {
      strDict[char] = 1;
    }
  }

  for (const char of message) {
    if (char in mDict) {
      mDict[char] += 1;
    } else {
      mDict[char] = 1;
    }
  }

  for (const key of Object.keys(mDict)) {
    if (!(key in strDict))
      // 1 se
      return false;
    if (mDict[key] > strDict[key]) return false;
  }
  return true;
}

// Assumption: charset : ASCII : 256 characters
const emptyMsg = " ";
const emptyString = "a b c";
console.log(canBuild(emptyMsg, emptyString)); // ?

/*
   const emptyMsg1 = 'hel lo';
   const emptyString1 = 'hello world';
   console.log(canBuild(emptyMsg1, emptyString1)); // true
   */
