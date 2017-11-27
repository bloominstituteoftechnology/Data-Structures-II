/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    
    }
    
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        if (this.storage !== null) {
            this.storage.push(val);
            this.bubbleUp(this.storage[val]);
        
       this.getSize();
    
        for(let i = 0; i < this.storage.length; i++) {
            val = this.storage[i];
            let j = i - 1;
            while (j >= 0 && this.storage[j] > val) {
                this.storage[j + 1] = this.storage[j];
                 j--;
            }
            this.storage[j + 1] = val;
            this.bubbleUp(val);
       }
    }
       this.getSize();
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      let max = this.getMax();
      this.storage[0] = null;
      this.getSize();
      this.siftDown(0);   
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
       const end = this.storage.pop();
       const first = this.storage[0];  
       if (first > end) return first;
       this.getSize();
       return end;
       }
    // Returns the size of the heap
    getSize() {
       let size = Object.values(this.storage);
       this.size = size.length
       return;
    }
    // Returns the storage array
    getStorage() {
        return this.storage;
    }
    // swap two indices
    swap(indexOne, indexTwo) {
        let tmp = this.storage[indexOne];
        this.storage[indexOne] = this.storage[indexTwo];
        this.storage[indexTwo] = tmp;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) { 
       
        if (this.storage[index] !== null) 
            while (index > 0) {
                let parentNode = Math.floor((index +1) / 2) -1;
                if (this.storage[parentNode] > this.storage[index]) this.swap(parentNode, index);
                index = parentNode;
                this.bubbleUp(index);
            }  
        this.getSize();
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
            if (swapThis === null) break;
            this.swap(swapThis, index);
            index = swapThis;
            }    
           // this.getSize();
    }
}
const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
const heap = new Heap();
heap.insert(4);
heap.insert(8);
heap.insert(9);
heap.insert(100);
console.log(heap);
heap.delete();
console.log(heap);    
console.log(heap.getMax());
console.log(heap);
console.log(heap.getStorage());
module.exports = Heap;

