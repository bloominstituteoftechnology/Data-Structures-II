class Heap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
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
  removeLargest() {
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    if (this.heap.length > 2) {
      const rec = (start) => {
        if ((start * 2) > this.heap.length) return;
        if (this.heap[start] < this.heap[start * 2] && (this.heap[start * 2] > this.heap[(start * 2) + 1] || !this.heap[(start * 2) + 1])) {
          const lower = this.heap[start];
          const higher = this.heap[start * 2];
          this.heap[start * 2] = lower;
          this.heap[start] = higher;
          rec(start * 2);
        }
        if (this.heap[start] < this.heap[(start * 2) + 1] && (this.heap[start * 2] < this.heap[(start * 2) + 1] || !this.heap[start * 2])) {
          const lower = this.heap[start];
          const higher = this.heap[(start * 2) + 1];
          this.heap[(start * 2) + 1] = lower;
          this.heap[start] = higher;
          rec((start * 2) + 1);
        }
        rec(start + 1);
      };
      rec(1);
    }
  }
}

const heap = new Heap();
heap.insert(5);
