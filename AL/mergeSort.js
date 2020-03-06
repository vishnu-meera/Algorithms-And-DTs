class MergeSort {
  constructor(arr) {
    this.array = arr;
  }
  merge(left, right) {
    let result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
  }
  sort(array = this.array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    this.merge(this.sort(left), this.sort(right));
  }
}
