/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        if (this.getSize() === this.storage.length) {
            this.size ++;
            this.storage[this.getSize() - 1] = val;
            this.bubbleUp(this.getSize() - 1);
        }

    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        if (this.getSize() !== null) {
        let storage = this.storage[0];
        this.storage[0] = this.getSize() -1
        this.size--;
        this.siftDown(index);    
        }
    }
    // Returns index of left Child
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    // Returns index of right child.
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex +2;
    }
    // Returns parent index
    getParentIndex(childIndex) {
        return (childIndex - 1) / 2;
    }
    // Returns boolean value for left child
    hasLeftChild(index) {
        return (getLeftChildIndex(index) < this.size);
    }
    // Returns boolean for child on right
    hasRightChild(index) {
        return (getRightChildIndex(index) < this.size);
    }
    // Returns boolean for Parent
    hasParent(index) {
        return (this.storage[getParentIndex(index)]);
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
    swap(indexOne, indexTwo) {
        let tmp = this.storage.indexOne;
        this.storage.indexOne = this.storage.indexTwo;
        this.storage.indexTwo = tmp;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) { 
     index = this.getSize() -1;
     while (this.hasParent(index) && parent(index) > this.storage.index) {
         swap(this.getParentIndex(index), index);
         index = this.getParentIndex(index);
     }
    }
    
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      if (this.getSize === 0) return undefined;
      let storage = this.storage[0];
      stoarage = this.storage[this.getSize() -1];
      this.size--;
      index = 0;
      while (hasLeftChild(index)) {
          let smallerChildIndex = this.getLeftChildIndex(index);
          if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
              smallerChildIndex = this.getRightChildIndex(index);
          }
          if (this.storage[index] < this.storage[smallerChildIndex]) {
              break;
          } else {
              this.swap(index, smallerChildIndex);
          }
          index = smallerChildIndex;
      }

    }
}

module.exports = Heap;
