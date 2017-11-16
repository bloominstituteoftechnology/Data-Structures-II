/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        // if first value in heap is null, replace it with this as the first value
        // otherwise push the new value on to the heap and increase the size of the heap
        if (this.storage[0] === null) this.storage[0] === val;
        else this.storage.push(val);
        this.size++;
        // check to see if we need to move the 
        this.bubbleUp(this.size-1);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      [this.storage[0], this.storage[this.size-1]] = [this.storage[this.size-1], this.storage[0]];
      delete this.storage[this.size-1];
      this.siftDown(0);
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
      return this.storage[0].value;
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
        while (index >= 1) {
          if (this.storage[index].value > this.storage[Math.floor(index/2)].value) {
            [this.storage[Math.floor(index/2)], this.storage[index]] = [this.storage[index], this.storage[Math.floor(index/2)]];
          }
          index = Math.floor(index/2);
        }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        //compare against left child
      while (this.storage[index] < this.storage[index*2] || this.storage[index] < this.storage[index*2+1]) {
          //compare the left and right child nodes
          if (this.storage[index*2] > this.storage[index*2+1]) {
              [this.storage[index], this.storage[index*2]] = [this.storage[index*2], this.storage[index]];
              index = index*2;
          } else {
              [this.storage[index], this.storage[index*2+1]] = [this.storage[index*2+1], this.storage[index]];
              index = index*2+1;
          }
      }
    }
}

module.exports = Heap;
