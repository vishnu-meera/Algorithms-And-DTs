/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const map = {};
  barcodes.forEach(num => (map[num] = (map[num] || 0) + 1));
  const keys = Object.keys(map).sort((a, b) => map[a] - map[b]);
  let idx = 1;
  for (const k of keys) {
    const frequency = map[k];
    for (let i = 0; i < frequency; i++) {
      if (idx >= barcodes.length) idx = 0;
      barcodes[idx] = parseInt(k);
      idx += 2;
    }
  }
  return barcodes;
};

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const map = {};
  let max_barcode = 0,
    max_barcode_frqncy = 0;

  for (const barcode of barcodes) {
    if (map[barcode] === undefined) {
      map[barcode] = 1;
    } else {
      map[barcode] += 1;
      if (map[barcode] > max_barcode_frqncy) {
        max_barcode_frqncy = map[barcode];
        max_barcode = barcode;
      }
    }
  }

  let pos = 0;
  for (let i = 0; i < max_barcode_frqncy; i++) {
    barcodes[pos] = max_barcode;
    pos += 2;
  }
  delete map[max_barcode];

  for (const barcode in map) {
    let fquncy = map[barcode];
    for (let i = 0; i < fquncy; i++) {
      if (pos >= barcodes.length) pos = 1;
      barcodes[pos] = barcode;
      pos += 2;
    }
  }

  return barcodes;
};
