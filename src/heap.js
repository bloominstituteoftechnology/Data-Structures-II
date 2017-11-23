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
        this.bubbleUp(this.storage.length -1)
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        let delItem;
        this.storage[0] = delItem;
        delItem = this.storage.pop();
        this.siftDown(0);
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        this.storage[0] = this.storage.pop()
      return ;
    }
    // Returns the size of the heap
    getSize() {
        this.size = this.storage.length;
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
        while (index > 0) {
            let parentNode = Math.floor((index +1) / 2) -1;
            if (this.storage[parentNode] > this.storage[index])
            this.swap(parentNode, index);
            index = parentNode;
        }  
    }
    
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        while (true) {
            let child = (index + 1) * 2;
            let nextChild = child -1;
            let swapThis = null;
            if (this.storage[index] > this.storage[child]) swapThis = child;
            if (this.storage[index] > this.storage[nextChild] && (this.storage[child] === null || (this.storage[child] !== null && this.storage[nextChild] < this.storage[child]))) {
                swapThis = nextChild;
            }
            if (swapThis === null || this.storage[swapThis] == null) break;
            this.swap(swapThis, index);
            index = swapThis;
            }     
    }
}
// const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
// const heap = new Heap(function(x){return x;});
// arr.forEach(item => heap.insert(item));
      
// heap.delete();
// while (heap.getSize() > 0)
//   console.log(heap.getMax());
module.exports = Heap;

