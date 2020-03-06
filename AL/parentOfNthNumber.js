const getParent = number => {
  const arr = new Array(number + 1).fill(0).map((v, k) => k);
  let parent = arr[0];
  let curParent = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (parent === 0) {
      parent = curParent + 1;
      curParent = parent;
    } else {
      parent--;
    }
    console.log(arr[i], parent, curParent);
  }
};

getParent(24);
