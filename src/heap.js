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
        this.bubbleUp(this.getSize());
    }
    // Deletes the element located at the last index of the heap
    // Calls siftDown in order to put the newly-inserted element in the right place in the heap
    delete() {
        const lastItem = this.storage.pop();
        this.size--;
        this.siftDown(this.storage[1]);
        return lastItem;
    }

    deleteMin() {
        const firstItem = this.storage.splice(1, 1)[0];
        this.size--;
        this.siftDown(this.storage[1]);
        return firstItem;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[this.getSize()];
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
        if (index === 0) return;
        const parent = Math.floor(index - 1 / 2);
        if (this.storage[parent] > this.storage[index]) {
            this.swap(parent, index);
            this.bubbleUp(parent);
        }
    }
    // Moves the element at the specified index "down"
    // the heap such that the heap property is maintained
    siftDown(index) {
        const leftChild = 2 * index;
        const rightChild = 2 * index + 1;

        if (leftChild >= this.getSize()) return;

        let smallerIdx = index;
        if (this.storage[index] > this.storage[leftChild]) {
            smallerIdx = leftChild;
        }

        if (rightChild < this.getSize() && this.storage[smallerIdx] > this.storage[rightChild]) {
            smallerIdx = rightChild;
        }

        if (smallerIdx !== index) {
            this.swap(index, smallerIdx);
            this.siftDown(smallerIdx);
        }
    }

    swap(parentIdx , childIdx) {
        const temp = this.storage[parentIdx];
        this.storage[parentIdx] = this.storage[childIdx];
        this.storage[childIdx] = temp;
    }
}

module.exports = Heap;
