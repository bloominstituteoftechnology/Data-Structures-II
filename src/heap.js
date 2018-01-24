/* eslint-disable */
class Heap {
  constructor() {
    this.storage = [null]; // makes the top of the heap have index 1 instead of index 0. 
		                      //  If the top of the heap has index 1 then for node with index x
		                     //   its children have indices 2x and 2x + 1.
  }
  
	// Inserts the given value in the heap
  // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
  insert(val) {
    this.storage.push(val);
    this.bubbleUp(this.storage.length - 1);
  }
  
	// Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
  // Calls siftDown in order to reorganize the heap with a new max/min
  // In some specifications, this method is also called `poll`
  delete() {
    if (this.storage.length === 1) return null; //heap is empty return null
    if (this.storage.length === 2) return this.storage.pop(); // there are one element in the heap, two elements in the array, 
	                                                           //  the top element gets deleted and returned
    const max = this.storage[1];    // the top element is called max because its the max element in an array. 
    this.storage[1] = this.storage.pop(); // The last element is popped and placed at the top of the heap because the top of 
		                                     //  the heap can not be empty and siftdown is about to be called.    
    this.siftDown(1);   // siftdown is called on the top of the array to move the elements in the heap into the correct order.
    return max;        // returns the max element in the heap.
  }

  // Returns the maximum value in the heap in constant time
  getMax() {
    return this.storage[1];
  }

  // Returns the size of the heap
  getSize() {
    return this.storage.length - 1;
  }

  // Returns the storage array
  getStorage() {
    return this.storage;
  }

  // Moves the element at the specified index "up" by swapping it with its parent
  // if its parent value is less than the value located at the input index
  // This method is only used by the heap itself in order to maintain the heap property
  bubbleUp(index) {
    const parent = Math.floor(index / 2);     // getting the index of the parent by dividing the index of the child by 2 
		                                         //  since we need to have access to the parent.  
    if (parent > 0 && this.storage[parent] < this.storage[index]) {  // the parent exists and there is no top node and 
			                                           // checks if the child is greater than the parent and if so swap them
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]]; // swapping the child and parent
			                                         //  which is done by set the first [element] to the second [element] 
      this.bubbleUp(parent);    // calls bubbleUp on the parent (but the parent holds the child)
    }
  }

  // First grabs the indices of this element's children and determines which of the children are larger
  // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
  // This method is only used by the heap itself in order to maintain the heap property
  siftDown(index) {
    const leftChildIndex = index * 2;   // get the indices of the left and right children in the heap
    const rightChildIndex = (index * 2) + 1;  
    let maxChildIndex; 
    if (this.storage[leftChildIndex] !== undefined && this.storage[rightChildIndex] === undefined) { // if the right child does not exist,
			                                                         // the left child becomes the max child.
      maxChildIndex = leftChildIndex;
    } else if (this.storage[leftChildIndex] === undefined && this.storage[rightChildIndex] !== undefined) { // reverses the if
      maxChildIndex = rightChildIndex;
    } else if (this.storage[leftChildIndex] === undefined && this.storage[rightChildIndex] === undefined) { // if there is no children return
      return;
    } else {                                                                                                  
      maxChildIndex = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : 
        rightChildIndex;                      // otherwise let the max child be whichever child is larger.
    }
    if (this.storage[index] < this.storage[maxChildIndex]) { // if the parent and child are in the wrong order, swap them (similar to bubbleUp's if)
      [this.storage[maxChildIndex], this.storage[index]] = [this.storage[index], this.storage[maxChildIndex]]; // swap case 
      this.siftDown(maxChildIndex);  // in case the node we swapped needs to be moved further down 
    }
  }
}

module.exports = Heap;

