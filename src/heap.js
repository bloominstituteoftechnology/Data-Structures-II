/* eslint-disable */
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
      const retVal = this.getStorage()[0];
      console.log(retVal);
      console.log(this.storage);
      this.storage[0] = this.storage[this.getSize()];
      this.storage.splice(this.getSize(), 1);
      this.size--
      this.siftDown(0);
      if (this.size === 0) this.storage[0] = null;
      //console.log(retVal);
      return retVal;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
      if (this.getSize() === 1) return null;
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
    //
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
      let parIndex;
      if (index%2 === 0) {
        parIndex = (index - 2)/2;
      } else {
        parIndex = (index - 1)/2;
      }
      if (this.getStorage()[parIndex] < this.getStorage()[index]) {
        this.swap(index, parIndex);
        this.bubbleUp(parIndex);            
      }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      const parent = this.storage[index];
      const leftChild = this.storage[2 * index + 1];
      const rightChild = this.storage[2 * index + 2];

      if (leftChild > parent && leftChild >= rightChild) {
        //parent and left child swap
        const temp = parent;
        this.storage[index] = leftChild;
        this.storage[2*index+1] = parent;
        this.siftDown(2*index+1);        
      } else if (rightChild > parent && rightChild > leftChild) {
        const temp = parent;
        this.storage[index] = rightChild;
        this.storage[2*index+2] = parent;
        this.siftDown(2*index+2);        
      }
    }
    swap(index, withIndex) {
      const temp = this.getStorage()[index];
      this.storage[index] = this.storage[withIndex];
      this.storage[withIndex] = temp;
    }
}

module.exports = Heap;