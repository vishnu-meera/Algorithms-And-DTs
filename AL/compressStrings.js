const compress = chars => {
  let index = 0;
  let replaceIndex = 0;

  while (index < chars.length) {
    let count = 0;
    let current = chars[index];

    while (index < chars.length && current === chars[index]) {
      index++;
      count++;
    }
    chars[replaceIndex++] = current;
    if (count > 1) {
      for (const c of count.toString()) {
        chars[replaceIndex++] = c;
      }
    }
  }

  return replaceIndex;
};
