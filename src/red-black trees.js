class Red-BlackTree {
  constructor(value, colorRed = true) { //1 will always be red. //can this be done with an array
  	this.value	= value;
  	this.right	= undefined;
  	this.left	= undefined;
  	this.isRed	= colorRed;
  	this.parent	= undefined;
  }
  insert(value) {

  }
  get isRoot() {
  	return this.parent === undefined
  }
  get isRightChild() {
  	if (this.isRoot === false) {
  	  return this.parent.right === this
    }
  }
  get isLeftChild() {
  	if (this.isRoot === false) {
  	  return this.parent.left === this
    }
  }

}