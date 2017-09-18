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
        this.bubbleUp(this.storage.length - 1);
    }
    // Deletes the element located at the last index of the heap
    // Calls siftDown in order to put the newly-inserted element in the right place in the heap
    delete() {

    }
    // Returns the maximum value in the heap in constant time
    getMax() {

    }
    // Returns the size of the heap
    getSize() {

    }
    // Returns the storage array
    getStorage() {

    }
    // Moves the element at the specified index "up"
    // the heap such that the heap property is maintained
    bubbleUp(index) {
        // Get the elemnt that has to be moved
        let element = this.storage[index];
        while (n > 0) {
            // Compute the parent element's index, and fetch it
            let parentIndex = Math.floor ((n + 1) / 2) - 1;
            parent = this.storage[parentIndex];
            if (parent <= element) {
                return;
            } else {
                this.storage[parentIndex] = element;
                this.storage[index] = parent;
                index = parentIndext;
            }
        }
    }
    // Moves the element at the specified index "down"
    // the heap such that the heap property is maintained
    siftDown(index) {

    }
}

module.exports = Heap;
