/* eslint-disable */
/* eslint-disable class-methods-use-this */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        if(this.size === 0) {
            this.storage[0] = val;
        } else {
            this.storage.push(val);            
            this.bubbleUp(this.storage.length-1);
        }
        this.size++;        
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        let temp = this.storage[0];
        this.storage[0] = this.storage[this.storage.length-1];
        this.storage[this.storage.length-1] = temp;
        const result = this.storage.splice(this.storage.length-1, 1);
        this.siftDown(0);
        this.size--;
        if(this.size === 0) {
            this.storage[0] = null;
        }
        return result[0];
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
        let parentIndex = index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
        if (this.storage[parentIndex] < this.storage[index]) {
            let temp = this.storage[parentIndex];
            this.storage[parentIndex] = this.storage[index];
            this.storage[index] = temp;
            this.bubbleUp(parentIndex);            
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
}

module.exports = Heap;
