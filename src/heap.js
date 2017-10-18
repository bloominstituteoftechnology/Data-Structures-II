/* eslint-disable */
// ----------------------------------------------------------------
class Heap {
    // ------------------------------------------------------------
    constructor() {
      this.storage = [null];
      this.size = 0;
    }
    // ------------------------------------------------------------
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    // ------------------------------------------------------------
    insert(val) {
      this.size++;
      if (this.getSize() === 0) {
        this.storage[this.getSize()] = val;
      } else {
        this.storage.push(val);
        this.bubbleUp(this.getSize());
      }
    }
    // ------------------------------------------------------------
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    // ------------------------------------------------------------
    delete() {
      this.size--;
  
      if (this.getSize() > 0) {
  
      }
  
    }
    // ------------------------------------------------------------
    // Returns the maximum value in the heap in constant time
    getMax() {
      return this.getStorage()[0];
    }
    // ------------------------------------------------------------
    // Returns the size of the heap
    getSize() {
      return this.size;
    }
    // ------------------------------------------------------------
    // Returns the storage array
    getStorage() {
      return this.storage;
    }
    // ------------------------------------------------------------
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
      const storageTmp = this.storage[Math.floor(index / 2)];
      this.storage[Math.floor(index / 2)] = this.storage[index];
      this.storage[index] = storageTmp;
    }
    // -------------------------------------------------------------
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    // -------------------------------------------------------------
    siftDown(index) {
      if (this.getSize() != 0 || index !== this.getSize()) {
        // ---------------------------------------------------------
        const check = this.getStorage()[index];
        const left = this.getStorage()[(index * 2) + 1] || null;
        const right = this.getStorage()[(index * 2) + 2] || null;
        // ---------------------------------------------------------
        if (left !== null && right !== null) {
          const bigger = left > right ? left : right;
          if (checkValue === bigger || checkValue > bigger) {
            if (bigger > checkValue) {
              this.swap(this.getStorage().indexOf(bigger), index);
            }
            this.siftDown(this.getStorage().indexOf(checkValue));
          }
        }
      }
    }
    // -------------------------------------------------------------
  }
  // ----------------------------------------------------------------
  /*
   */
  // ----------------------------------------------------------------
  module.exports = Heap;