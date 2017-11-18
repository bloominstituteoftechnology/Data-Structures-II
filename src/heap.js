/* eslint-disable */
class Heap {
	constructor() {
		this.storage = [null];
		this.size = 0;
	}
	// Inserts the given value in the heap
	// Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
	insert(val) {
	  	this.storage.push(val)
	  	this.bubbleUp(this.storage.length-1);
	}
	// Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
	// Calls siftDown in order to reorganize the heap with a new max/min
	// In some specifications, this method is also called `poll`
	delete() {
		this.storage.shift();
	}
	// Returns the maximum value in the heap in constant time
	getMax() {
		let max = 0;
		for (let i = 0; i < this.storage.length; i++) {
			if (max < this.storage[i]) {
				max = this.storage[i];
			}
		}
		return max;
	}
	// Returns the size of the heap
	getSize() {
		return this.storage.length;
	}
	// Returns the storage array
	getStorage() {
		return this.storage;
	}
	// Moves the element at the specified index "up" by swapping it with its parent 
	// if its parent value is less than the value located at the input index
	// This method is only used by the heap itself in order to maintain the heap property
	bubbleUp(index) {
		while (index>0) {
			let parentN = Math.floor ((n+1) / 2) - 1,
			parent = this.content[parentN];
			if(score >= this.scoreFunction(parent)) {
				break;
			}
			this.storage[parentN] = this.storage[index];
			this.storage[n] = parent;
			n = parentN;

		}
	}
	// First grabs the indices of this element's children and determines which of the children are larger
	// If the larger of the child elements is larger than the parent, the child element is swapped with the parent
	// This method is only used by the heap itself in order to maintain the heap property
	siftDown(index) {
		element = this.storage[index],
		elemScore = this.scoreFunction(element);

	 	while(true) {
	  		let child2N = (n+1) * 2, child1N = child2N -1;
	  		let swap = null;
	  		if (child1N < length) {
	  			let child1 = this.content(child1N);
	  		}
	  			child1Score = this.scoreFunction(child1);
	  		if (childScore < elemScore) {
	  			swap = child1N;
	  		}
	  	}
	  	if (child2N < this.storage.length) {
        	var child2 = this.storage[child2N],
        	child2Score = this.scoreFunction(child2);
        }
        if (child2Score < (swap == null ? elemScore : child1Score))
          	swap = child2N;
      	// if (swap === null) {
      	// 	break;
      	// }
      	this.storage[n] = this.content[swap];
      	this.storage[swap] = element;
      	n = swap;
	}
}

module.exports = Heap;
