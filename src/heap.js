class Heap {
  constructor() {
    this.storage = [null];
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    this.storage.push(val);
    this.bubbleUp(this.storage.length - 1);
  }
  // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    if (this.storage.length === 1) return null;
    if (this.storage.length === 2) return this.storage.pop();
    const max = this.storage[1];
    this.storage[1] = this.storage.pop();
    this.siftDown(1);
    return max;
  }

  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[1];
  }

  // Returns the size of the heap
  getSize() {
    return this.storage.length - 1;
  }

  // Returns the storage array
  getStorage() {
    return this.storage;
  }

  // Moves the element at the specified index "up" by swapping it with its parent
  // if its parent value is less than the value located at the input index
  // This method is only used by the heap itself in order to maintain the heap property
  bubbleUp(index) {
    const parent = Math.floor(index / 2);
    if (parent > 0 && this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    const leftChildIndex = index * 2;
    const rightChildIndex = (index * 2) + 1;
    let maxChildIndex;
    if (this.storage[leftChildIndex] !== undefined && this.storage[rightChildIndex] === undefined) {
      maxChildIndex = leftChildIndex;
    } else if (this.storage[leftChildIndex] === undefined && this.storage[rightChildIndex] !== undefined) {
      maxChildIndex = rightChildIndex;
    } else if (this.storage[leftChildIndex] === undefined && this.storage[rightChildIndex] === undefined) {
      return;
    } else {
      maxChildIndex = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex :
        rightChildIndex;
    }
    if (this.storage[index] < this.storage[maxChildIndex]) {
      [this.storage[maxChildIndex], this.storage[index]] = [this.storage[index], this.storage[maxChildIndex]];
      this.siftDown(maxChildIndex);
    }
  }
}

module.exports = Heap;
