/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
class Heap {
  constructor() {
    this.storage = [null];
    this.size = 0;
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    if (this.getSize() === 0) {
      this.storage[this.getSize()] = val;
    } else {
      this.storage.push(val);
      this.bubbleUp(this.getSize());
    }
    this.size++;
  }
  // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    this.size--;
    if (this.getSize() >= 0) {
      this.swap(0, this.getSize());
      const retValue = this.storage.pop();
      this.siftDown(0);
      return retValue;
    }
  }
  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.getStorage()[0];
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
    const n = index % 2 === 0 ? 2 : 1;
    const parIndex = (index - n) / 2;
    const parent = this.getStorage()[parIndex];
    const checkValue = this.getStorage()[index];

    if (parent < checkValue) {
      this.swap(index, parIndex);
      if (parent !== undefined) this.bubbleUp(parIndex);
    }
  }
  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    if (this.getSize() === 0 || index === this.getSize()) return;
    const checkValue = this.getStorage()[index];
    const left = this.getStorage()[(index * 2) + 1] || null;
    const right = this.getStorage()[(index * 2) + 2] || null;
    if (left === null && right === null) return;
    const bigger = left > right ? left : right;
    if (checkValue === bigger || checkValue > bigger) return;
    if (bigger > checkValue) this.swap(this.getStorage().indexOf(bigger), index);
    this.siftDown(this.getStorage().indexOf(checkValue));
  }

  swap(index, withIndex) {
    const temp = this.getStorage()[index];
    this.storage[index] = this.storage[withIndex];
    this.storage[withIndex] = temp;
  }
}

module.exports = Heap;
