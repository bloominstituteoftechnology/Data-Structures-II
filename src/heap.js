class Heap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    this.sort();
  }
  delete() {
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.sort();
  }
  getMax() {
    return this.heap[1];
  }
  getSize() {
    return this.heap.length - 1;
  }
  sort() {
    if (this.heap.length > 2) {
      const rec = (len) => {
        if (len === 1) return;
        if (this.heap[Math.floor(len / 2)] < this.heap[len]) {
          const lower = this.heap[Math.floor(len / 2)];
          const higher = this.heap[len];
          this.heap[len] = lower;
          this.heap[Math.floor(len / 2)] = higher;
          rec(len);
        }
        rec(len - 1);
      };
      rec(this.heap.length - 1);
    }
  }
}

module.exports = Heap;
