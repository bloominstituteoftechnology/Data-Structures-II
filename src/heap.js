/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        const newIndex = this.storage.push(val);
        this.size++;
        this.bubbleUp(newIndex);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        this.size--;
        const removed = this.storage.shift();
        return this.siftDown(removed);
    }
    // Returns the maximum value in the heap in constant time`
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
        if(this.size <= 1) return;
        let parent = this.storage[index - 1];
        let current = this.storage[index];
        if (parent < current) {
            this.storage[index] = parent;
            this.storage[index - 1] =  current;
        }
        if(index - 1 > -1)
        return this.bubbleUp(index-1);
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {      
        return index;
      //console.log(index);
    }
}

module.exports = Heap;
heap = new Heap();
heap.insert(2);
heap.insert(5);
heap.insert(9);
heap.insert(10);
heap.insert(1);
heap.insert(7);
console.log(heap);
/*
heap.insert(6);
heap.insert(8);
console.log(heap);
heap.insert(10);

console.log(heap);
heap.insert(9);
heap.insert(1);
heap.insert(9);
heap.insert(9);
heap.insert(5);
console.log(heap);
console.log(heap.getMax(),10);
console.log(heap.delete());
console.log(heap.getMax(),9);
*/
/* heap.insert(6);
heap.insert(7);
heap.insert(5);
heap.insert(8);
heap.insert(10);
heap.insert(1);
heap.insert(2);
heap.insert(5);

const descendingOrder = [];
while (heap.getSize() > 0) {
  descendingOrder.push(heap.delete());
}

console.log(descendingOrder,[10, 8, 7, 6, 5, 5, 2, 1]) */