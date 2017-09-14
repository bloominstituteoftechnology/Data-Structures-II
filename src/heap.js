class Heap {
  constructor() {
    this.heap = [];
  }
  getMax() { // peek
    return this.heap[0];
  }
  delete() { // poll
    if (this.size > 0) {
      const value = this.heap.shift();
      this.siftDown();
      return value;
    }
  }
  insert(value) { // add
    this.heap[this.size] = value;
    this.bubbleUp();
    return this.size;
  }
  bubbleUp() { // heapify up
    if (this.size < 2) {
      return;
    }
    let currentIndex = this.size - 1;
    const node = this.heap[currentIndex];
    while (this.hasParent(currentIndex) && this.getParent(currentIndex) < node) {
      this.heap[currentIndex] = this.getParent(currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
      this.heap[currentIndex] = node;
    }
    return this.getMax();
  }
  siftDown() { // heapify down
    if (this.size < 2) {
      return;
    }
    const node = this.getMax();
    let currentIndex = 0;
    let smallestIndex;
    do {
      smallestIndex = -1;
      if (this.hasLeftChild(currentIndex) && this.getLeftChild(currentIndex) > node) {
        smallestIndex = this.getLeftChildIndex(currentIndex);
      }
      if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) > node) {
        smallestIndex = this.getRightChildIndex(currentIndex);
      }
      if (smallestIndex > currentIndex) {
        this.heap[currentIndex] = this.heap[smallestIndex];
        this.heap[smallestIndex] = node;
        currentIndex = smallestIndex;
      }
    } while (smallestIndex > 0);
    return this.getMax();
  }
  contains(value) {
    // ==== Depth First Search ====
    // let found = false;
    // const searchChildren = (index) => {
    //   if (index !== undefined && !found) {
    //     if (value === this.heap[index]) {
    //       found = true;
    //       return;
    //     }
    //     searchChildren(this.getLeftChild(index));
    //     searchChildren(this.getRightChild(index));
    //   }
    // };
    // searchChildren(0);
    // return found;
    // === Breadth First Search ===
    // for (let i = 0; i < this.size; i++) { // It's sorted breadth first by nature
    //   if (value === this.heap[i]) {
    //     return true;
    //   }
    // }
    // return false;
    // ===== .indexOf(value) =====
    return this.heap.indexOf(value) >= 0; // I think this is normally faster than a for loop
  }
  getSize() {
    return this.size;
  }
  get size() {
    return this.heap.length;
  }
  // ======= Helper Functions =======
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return (2 * index) + 1;
  }
  getRightChildIndex(index) {
    return (2 * index) + 2;
  }
  getParent(index) {
    if (this.hasParent(index)) {
      return this.heap[this.getParentIndex(index)];
    }
  }
  getLeftChild(index) {
    if (this.hasLeftChild(index)) {
      return this.heap[this.getLeftChildIndex(index)];
    }
  }
  getRightChild(index) {
    if (this.hasRightChild(index)) {
      return this.heap[this.getRightChildIndex(index)];
    }
  }
}

module.exports = Heap;
