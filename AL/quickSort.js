class QuickSort {
  constructor(arr) {
    this.array = arr;
  }
  swap(i, j) {
    let t = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = t;
  }
  partition(low, high) {
    let i = low;
    let j = high;
    let pivot = this.array[low];
    while (i < j) {
      while (this.array[i] <= pivot) i++;
      while (this.array[j] > pivot) j--;
      if (i < j) this.swap(i, j);
    }
    this.swap(j, low);
    return j;
  }
  sort(low = 0, high = this.array.length - 1) {
    if (low < high) {
      let pivot = this.partition(low, high);
      this.sort(low, pivot - 1);
      this.sort(pivot + 1, high);
    }
  }
}

const q = new QuickSort([6, 3, 9, 2, 10, 7]);
q.sort();
console.log(q.array);
