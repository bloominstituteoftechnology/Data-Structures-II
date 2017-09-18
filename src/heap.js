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
        size++;
        bubbleUp(this.storage[this.storage.length - 1]);
    }
    // Deletes the element located at the last index of the heap
    // Calls siftDown in order to put the newly-inserted element in the right place in the heap
    delete() {
        this.storage.shift();
        this.size--;
        const moved = this.storage.pop();
        this.storage.splice(1, 0, moved);
        siftDown(1);

    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        let stored = null;
        const storage = this.getStorage();
        let size = this.getSize();
        if(size === 0) return stored;
        for (let i = 0; i < size; i++) {
            if (storage[i] > stored ) stored = storage[i];
        }
        return stored;
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
        if (this.size <= 1) return;
        const parent = Math.floor(index / 2);
        if (parent < 0) return;
        if (parent >= 0) {
            if (this.storage[index] > this.storage[parent]) [this.storage[index], this.storage[parent]] = [this.storage[parent], this.storage[index]];
            bubbleUp(parent);
        }
    }
    // Moves the element at the specified index "down"
    // the heap such that the heap property is maintained
    siftDown(index) {
        if (index === this.size) return;
        const lChild = index * 2;
        const rChild = index * 2 + 1;
        const maxChild;
        if (lChild !== undefined) {
            if (rChild === undefined) {
                maxChild = lChild;
            } else {
                maxChild = (this.storage[lChild] > this.storage[rChild]) ? lChild : rChild;
            }
        }
        if (this.storage[index] < this.storage[maxChild]) {
            [this.storage[index], this.storage[maxChild]] = [this.storage[maxChild], this.storage[index]];
            siftDown(maxChild);
        }
    }    
}

module.exports = Heap;
