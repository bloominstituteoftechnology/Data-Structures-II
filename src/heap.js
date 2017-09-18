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
    }
    // Deletes the element located at the last index of the heap
    // Calls siftDown in order to put the newly-inserted element in the right place in the heap
    delete() {
        
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
    // Moves the element at the specified index "up"
    // the heap such that the heap property is maintained
    bubbleUp(index) {
        
    }
    // Moves the element at the specified index "down"
    // the heap such that the heap property is maintained
    siftDown(index) {

    }
}

module.exports = Heap;
