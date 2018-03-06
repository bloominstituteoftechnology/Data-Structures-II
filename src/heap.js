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
        this.size++;
        let index = this.storage.length - 1;
        this.bubbleUp(index);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        const deleted = this.getMax();
        this.storage = [null].concat(this.storage.slice(2)); 
        // this.storage = this.storage.splice(1,1); Why doesn't this work!?
        this.size--;
        let index = 1;
        while (index <= this.size) {
          this.siftDown(index);
          index++;
        }
        return deleted;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[1];

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
        while (this.storage[index] > this.storage[Math.ceil(index/2)]) {
            if (index > 1) {
              [this.storage[Math.ceil(index/2)], this.storage[index]] = [this.storage[index], this.storage[Math.ceil(index/2)]];
            if (Math.ceil(index/2) > 1) {
              index = Math.ceil(index/2)
            } else { break; }
            }
        }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        let child1 = this.storage[Math.ceil(index*2)];
        let c1index = Math.ceil(index*2);
        let child2 = this.storage[Math.ceil(index*2 + 1)];
        let c2index = Math.ceil(index*2 + 1);
        let greaterChild;
        let gcIndex;
        if (child1 >= child2 || child2 === undefined) {
          greaterChild = child1;
          gcIndex = c1index;
        } else {
            greaterChild = child2;
            gcIndex = c2index; // not needed to pass test, but I assume we need?
        }
        if (greaterChild > this.storage[index]) {
          [this.storage[gcIndex], this.storage[index]] = [this.storage[index], this.storage[gcIndex]];
        }
    }
      
}


module.exports = Heap;
