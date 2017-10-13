/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        this.storage.push(val);
        if(this.getSize() === 1) {
           return; 
        }   
        this.bubbleUp(this.storage.length - 1);     
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
	siftDown(0);
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        if(this.storage.length === 1)
            return null;
        return (this.storage[1]);
    }
    // Returns the size of the heap
    getSize() {
        return this.storage.length - 1;
    }
    // Returns the storage array
    getStorage() {
        return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
       while(index > 0) {
           if(this.storage[index] > this.storage[index / 2]) {
               this.swap(index, index / 2);
           }
           else
                break;
       } 
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      while(index < this.storage.length) {
          let greatest = 0;
          if (this.storage[index * 2] > this.storage [index * 2 + 1]) {
              greatest = index * 2;
          } else {
              greatest = index * 2 + 1;
          }
          swap(index, greatest);
          index = greatest;
        }
        this.storage.pop();
    }

    swap(index, withIndex) {
        const temp = this.storage[index];
        this.storage[index] = this.storage [withIndex];
        this.storage[withIndex] = temp;
    }
}

module.exports = Heap;
