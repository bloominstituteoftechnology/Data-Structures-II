/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
      let valIndex = this.storage.push(val)-1; // Array.push() returns length of the new array, so we can add val while getting its index
      while(this.bubbleUp(valIndex--)){
      } // bubbleUp val
      this.size++;
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      const deletedVal = this.storage.shift();
      this.size--;
      this.siftDown(0);
      return deletedVal;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
      return Math.max(...this.storage)
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
      if (index && this.storage[index] > this.storage[index-1]) {
        let oldChild = this.storage[index];
        this.storage[index] = this.storage[index-1];
        this.storage[index-1] = oldChild;
        if(this.storage[index-2] < this.storage[index-1]) return true;
      }
      return false;
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      const maxVal = Math.max(...this.storage);
      if(this.storage[index] < maxVal) {
        let maxChildIndex = this.storage.indexOf(maxVal);
        this.storage[maxChildIndex] = this.storage[index];
        this.storage[index] = maxVal;
      }
    }
}

module.exports = Heap;
