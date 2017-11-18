/* eslint-disable */
class Heap {
  constructor() {
      this.storage = [null];
      this.size = 0;
  }
  // Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(value) {
    if (this.storage[0] === null) {
      this.storage[0] = value;
    } else {
      this.storage.push(value);
    }
    this.size = this.storage.length;
    const index = (this.size - 1);
    this.bubbleUp(index);
  }
  // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    const deletedItem = this.storage.sort((a, b) => a - b).reverse().splice(0, 1);
    this.size = this.storage.length;
    // this.bubbleUp(this.size);
    this.siftDown(0);
    return deletedItem[0];
  }
  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[0];
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
    if (this.storage.length === 0 || this.storage[0] === null) return;
    const currentNode = this.storage[index];
    const parentNodeIndex = Math.floor((index - 1) / 2);
    const parentNode = this.storage[parentNodeIndex];
    if (parentNode < currentNode) {
      this.storage[parentNodeIndex] = currentNode;
      this.storage[index] = parentNode;
      return this.bubbleUp(parentNodeIndex);
    }
    return;
  }
  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    const currentNode = this.storage[index];
    const childIndices = [
      Math.floor((2 * index) + 1),
      Math.floor((2 * index) + 2)
    ];
    let largestChild = this.storage[childIndices[0]];
    let largestChildIndex = childIndices[0];
    if (this.storage[childIndices[1]] > largestChild) {
      largestChild = this.storage[childIndices[1]];
      largestChildIndex = childIndices[1];
    }
    if (largestChild > currentNode) {
      this.storage[largestChildIndex] = currentNode;
      this.storage[index] = largestChild;
      return this.siftDown(largestChildIndex);
    }
    return;
  }
}

module.exports = Heap;
