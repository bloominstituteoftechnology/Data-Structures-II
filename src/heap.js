/* eslint-disable */
class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    this.storage[this.size + 1] = val;
    this.bubbleUp(this.size + 1);
    this.size++;
  }
  // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    if (this.storage[0] === undefined) return undefined;
    // according to heap property, remove the max and put the min to the front of heap
    const max = this.storage.shift();
    const min = this.storage.pop();
    this.storage.unshift(min);
    // swapping the min until positioning it in the proper place in heap 
    this.siftDown(0);
    this.size--;
    return max;
  }
  // Returns the maximum value in the heap in constant time
  getMax() {
    if (this.storage[0] && this.storage !== undefined) return this.storage[0];
  }
  // Returns the size of the heap
  getSize() {
    return this.size;
  }
  // Returns the storage array
  getStorage() {
    return this.storage;
  }
  // Moves the element at the specified index "up" by swapping it with its parent
  // if its parent value is less than the value located at the input index
  // This method is only used by the heap itself in order to maintain the heap property
  bubbleUp(index) {
    let pos = index;
    let parent = this.storage[Math.floor((pos - 1) / 2)];
    let current = this.storage[pos];
    // if current element is greater than its parent
    if (parent !== undefined && current > parent) {
      // swap the current element and its parent
      this.storage[pos] = parent;
      this.storage[Math.floor((pos - 1) / 2)] = current;
      pos = Math.floor((pos - 1) / 2);
      // continue swapping until no element is greater than its parent
      this.bubbleUp(pos);
    }
  }
  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    let pos = index;
    const current = this.storage[pos];
    const left = this.storage[pos * 2 + 1];
    const right = this.storage[pos * 2 + 2];
    if (left !== undefined) {
      if (right === undefined) {
        if (left > current) {
          this.storage[pos * 2 + 1] = current;
          this.storage[pos] = left;
          pos = pos * 2 + 1;
          this.siftDown(pos);
        }
      } else if (right !== undefined) {
        if (left >= right) {
          this.storage[pos * 2 + 1] = current;
          this.storage[pos] = left;
          pos = pos * 2 + 1;
          this.siftDown(pos);
        } else {
          this.storage[pos * 2 + 2] = current;
          this.storage[pos] = right;
          pos = pos * 2 + 2;
          this.siftDown(pos);
        }
      }
    }
  }
}

module.exports = Heap;
