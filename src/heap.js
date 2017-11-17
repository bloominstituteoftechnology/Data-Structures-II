/* eslint-disable */
class HeapHelper {
  static swapArrayElements(index1, index2, array) {
    const element1 = array[index1];
    const element2 = array[index2];
    array[index2] = element1;
    array[index1] = element2;
  }
  static getParentIndex(index) {
    return Math.floor(index / 2);
  }
  static getLeftChildIndex(index) {
    return index * 2;
  }
  static getRightChildIndex(index) {
    return index * 2 + 1;
  }
  static getGreaterChildIndex(leftChildIndex, rightChildIndex, array) {
    return array[leftChildIndex] > array[rightChildIndex] ? leftChildIndex : rightChildIndex;
  }
  static getGreaterChild(leftChildIndex, rightChildIndex, array) {
    return array[this.getGreaterChildIndex(leftChildIndex, rightChildIndex, array)];
  }
}

class Heap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
// Inserts the given value in the heap
// Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    if (typeof val === 'undefined') return;
    this.storage.push(val);
    this.bubbleUp(this.storage.length - 1);
    this.size++;
    // console.log('val: ',val, ' storage: ', this.storage.toString());
  }
// Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
// Calls siftDown in order to reorganize the heap with a new max/min
// In some specifications, this method is also called `poll`
  delete() {
    const deleted = this.storage.shift();
    this.siftDown(0);
    this.size--;
    return deleted;
  }
// Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[0];
  }
// Returns the size of the heap
  getSize() {
    return this.storage.length;
  }
// Returns the storage array
  getStorage() {
    return this.storage;
  }
// Moves the element at the specified index "up" by swapping it with its parent
// if its parent value is less than the value located at the input index
// This method is only used by the heap itself in order to maintain the heap property
  bubbleUp(index) {
    let currentIndex = index;
    let parentIndex = HeapHelper.getParentIndex(currentIndex);
    while (this.storage[currentIndex] > this.storage[parentIndex]) {
      HeapHelper.swapArrayElements(currentIndex, parentIndex, this.storage);
      currentIndex = parentIndex;
      parentIndex = HeapHelper.getParentIndex(currentIndex);
    }
  }
// First grabs the indices of this element's children and determines which of the children are larger
// If the larger of the child elements is larger than the parent, the child element is swapped with the parent
// This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    
  }
}

module.exports = Heap;
