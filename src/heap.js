class Heap {
  constructor() {
    this.heap = [];
  }
  isLeftChild(index) {
    return index > 0 && index % 2 !== 0;
  }
  isRightChild(index) {
    return index > 0 && index % 2 === 0;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  hasBrother(index) {
    return this.getBrotherIndex(index) < this.size;
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
  getBrotherIndex(index) {
    if (index > 0) {
      if (this.isRightChild(index)) {
        return index - 1;
      }
      return index + 1;
    }
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
  getBrother(index) {
    if (this.hasBrother(index)) {
      return this.heap[this.getBrotherIndex(index)];
    }
  }
  peek() {
    return this.heap[0];
  }
  poll() {
    if (this.size > 0) {
      const value = this.heap[0];
      this.heap.length--;
      this.siftDown();
      return value;
    }
  }
  insert(value) { // add
    this.heap[this.size] = value;
    this.bubbleUp();
    return this.size;
  }
  delete() { // poll bottom
    if (this.size > 0) {
      const value = this.getMax();
      this.heap.length--;
      this.bubbleUp();
      return value;
    }
  }
  getMax() { // peek bottom
    if (this.heap.length > 0) {
      return this.heap[this.size - 1];
    }
  }
  getSize() {
    return this.size;
  }
  get size() {
    return this.heap.length;
  }
  bubbleUp() { // heapify up
    if (this.size < 2) {
      return;
    }
    const node = this.getMax();
    let currentIndex = this.size - 1;
    console.log(this.heap);
    console.log(`node: ${node} | hasParent: ${this.hasParent(currentIndex)} | index: ${currentIndex} | getParentIndex: ${this.getParentIndex(currentIndex)} | getParent: ${this.getParent(currentIndex)} | parentGreaterThan: ${this.getParent(currentIndex) > node}`);
    while (this.hasParent(currentIndex) && this.getParent(currentIndex) > node) {
      this.heap[currentIndex] = this.getParent(currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
      this.heap[currentIndex] = node;
      console.log(this.heap);
      console.log(`node: ${node} | hasParent: ${this.hasParent(currentIndex)} | index: ${currentIndex} | getParentIndex: ${this.getParentIndex(currentIndex)} | getParent: ${this.getParent(currentIndex)} | parentGreaterThan: ${this.getParent(currentIndex) > node}`);
    }
    return this.getMax();
  }
  siftDown() { // heapify down
    if (this.size < 2) {
      return;
    }
    const node = this.peek();
    let currentIndex = 0;
    let smallestIndex;
    do {
      smallestIndex = -1;
      if (this.hasLeftChild(currentIndex) && this.getLeftChild(currentIndex) < node) {
        smallestIndex = this.getLeftChildIndex(currentIndex);
      }
      if (this.hasRightChild(currentIndex) && this.getRightChild(currentIndex) < node) {
        smallestIndex = this.getRightChildIndex(currentIndex);
      }
      if (smallestIndex > currentIndex) {
        this.heap[currentIndex] = this.heap[smallestIndex];
        this.heap[smallestIndex] = node;
        currentIndex = smallestIndex;
      }
    } while (smallestIndex > 0);
    return this.peek();
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
    // }
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
}

module.exports = Heap;
