/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        this.storage.push(val);
        this.size += 1;
        this.bubbleUp(this.size - 1);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        let maxValue;
        if (this.size === 0) return;
        else if (this.getSize() === 1) {
            this.size -= 1;
            return this.storage.pop();
        } else {
            this.size -= 1;
            maxValue = this.storage.splice(0, 1, this.storage.pop())[0];
            this.siftDown(0);            
        }
        return maxValue;
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
        if (index === 0) return;
        let parent = (index % 2 == 0) ? Math.floor((index - 2) / 2) : Math.floor((index - 1) / 2);  
        parent = (parent > 0) ? parent : 0; 
        if (this.storage[index] > this.storage[parent]) {
            this.storage[index] = this.storage.splice(parent, 1, this.storage[index])[0];
            this.bubbleUp(parent);
        } 
        return;
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        if (index >= this.size - 1) return;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        if (this.storage[leftChild] !== undefined && this.storage[rightChild] !== undefined) {
            if (this.storage[leftChild] > this.storage[rightChild]) {
                if (this.storage[leftChild] > this.storage[index]) {
                    this.storage[index] = this.storage.splice(leftChild, 1, this.storage[index])[0];
                    this.siftDown(leftChild);
                }
                return;
            } else {
                if (this.storage[rightChild] > this.storage[index]) {
                    this.storage[index] = this.storage.splice(rightChild, 1, this.storage[index])[0];
                    this.siftDown(rightChild);
                }
                return;
            }
        } else if (this.storage[leftChild] !== undefined) {
            if (this.storage[leftChild] > this.storage[index]) {
                this.storage[index] = this.storage.splice(leftChild, 1, this.storage[index])[0];
                this.siftDown(leftChild);
            }
            return;
        } else
            return;
    }    
}

module.exports = Heap;
