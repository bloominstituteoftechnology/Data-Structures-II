/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null]; //[0,1,2,3] 10
        this.size = 0; //4
    } 
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    
    insert(val) {
        this.storage[this.size]=val;
        this.size++;
        //console.log(this.storage)
        this.bubbleUp(this.size-1);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        this.storage[0] = this.storage[this.size-1];
        this.storage.pop();
        this.size--;
        this.siftDown(0);
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[0];
    }
    // Returns the size of the heap
    getSize() {
        return this.size
    }
    // Returns the storage array
    getStorage() {
        return this.storage
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
        let parentInd = Math.floor((index-1)/2);
        //console.log(parentInd);
        if(index>0 && this.storage[parentInd]<this.storage[index]){
            let temp = this.storage[index];
            this.storage[index] = this.storage[parentInd];
            this.storage[parentInd] = temp;
            this.bubbleUp(parentInd);
        }
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        let right = 2*index+2;
        let left = 2*index+1;
        let maxInd = index;
        if(left<this.size && this.storage[left]>this.storage[index]){
            maxInd = left;
        }
        if(right<this.size && this.storage[right]>this.storage[maxInd]){
            maxInd = right;
        }
        if(maxInd != index){
            let temp = this.storage[index];
            this.storage[index] = this.storage[maxInd];
            this.storage[maxInd] = temp;
            this.siftDown(maxInd);
        }
    }
}

module.exports = Heap;
