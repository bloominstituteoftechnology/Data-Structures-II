/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        if (this.storage[0] === null) this.storage[0] = val;
        // push the new value on to the heap and increase the size of the heap
        else this.storage.push(val);
        this.size++;
        // check to see if we need to move the 
        if (this.size > 1) {
          this.bubbleUp(this.size);
        }
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      this.storage[0] = this.storage.pop();
      this.size--;
      if (this.size >= 1) {
      this.siftDown(0);
      }
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
        let parent = Math.floor(index/2);
        while (index >= 1) {
          if (this.storage[index] > this.storage[parent]) {
              const bigger = this.storage[index];
              const smaller = this.storage[parent];
              this.storage[parent] = bigger;
              this.storage[index] = smaller;
          }
          index = Math.floor(index/2);
          parent = Math.floor(index/2);
        }
        return;
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        //compare against left child
        let left = index*2;
        let right = index*2+1;
      while (this.storage[index] <= this.storage[left] || this.storage[index] <= this.storage[right]) {
          //compare the left and right child nodes
          if (this.storage[left] > this.storage[right]) {
              [this.storage[index], this.storage[left]] = [this.storage[left], this.storage[index]];
              index = left;
          } else {
              [this.storage[index], this.storage[right]] = [this.storage[right], this.storage[index]];
              index = right;
          }
          left = index*2;
          right = index*2+1;
          if (this.storage[left] === undefined || this.storage[right] === undefined) {
              break;
          }
      }
    }
}

module.exports = Heap;
