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
        for (let i = 0; i < this.storage.length; i++) {
            this.siftDown(i);
        }
       
    }
    // Returns index of left Child
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    // Returns index of right child.
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex +2;
    }
    // Returns parent index
    getParentIndex(childIndex) {
        return (childIndex - 1) / 2;
    }
    // Returns boolean value for left child
    hasLeftChild(index) {
        const myHeap = new Heap();
        return (myHeap.getLeftChildIndex(index) < this.size);
    }
    // Returns boolean for child on right
    hasRightChild(index) {
        const myHeap = new Heap();
        return (myHeap.getRightChildIndex(index) < this.size);
    }
    // Returns boolean for Parent
    hasParent(index) {
        return (this.storage[this.storage.getParentIndex(index)]);
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        this.storage.filter(value => { 
            return ((value > this.storage[0]) ? value : storage[0]);
        });
        return this;
    }
    // Returns the size of the heap
    getSize() {
        this.size = this.storage.length();
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
            let parent =  this.storage[parentNode];
            if (parent >= this.storage[index]) break;
            this.storage[parentNode] = index;
            this.storage[index] = parent;
            index = parentNode;
        }
    }
    
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      if (this.storage.length === 0) return undefined;
      let storage = this.storage[0];
      storage = this.storage[this.storage.length -1];
      this.size--;
      index = 0;
      while (this.hasLeftChild(index) !== null) {
          let smallerChildIndex = this.getLeftChildIndex(index);
          if (this.hasRightChild(index) && this.hasrightChild(index) < this.leftChild(index)) {
              smallerChildIndex = this.getRightChildIndex(index);
          }
          if (this.storage[index] < this.storage[smallerChildIndex]) {
              break;
          } else {
              this.swap(index, smallerChildIndex);
          }
          index = smallerChildIndex;
      }

    }
}
const arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
const heap = new Heap(function(x){return x;});
arr.forEach(item => heap.insert(item));
      
heap.delete();
while (heap.size() > 0)
  print(heap.pop());
module.exports = Heap;
