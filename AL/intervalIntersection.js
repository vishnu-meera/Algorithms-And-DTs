var intervalIntersection = function(A, B) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < A.length && j < B.length) {
    const [as, ae] = A[i];
    const [bs, be] = B[j];

    if (ae < bs) {
      i++;
    } else if (be < as) {
      j++;
    } else if (ae <= be) {
      result.push([Math.max(as, bs), ae]);
      i++;
    } else if (be <= ae) {
      result.push([Math.max(as, bs), be]);
      j++;
    }
  }

  return result;
};
