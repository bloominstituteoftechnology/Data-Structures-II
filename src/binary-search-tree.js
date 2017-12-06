class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  insert(input) {
    if(input < this.value){
      if(!this.left) {
        this.left = new BinarySearchTree(input);
      } else {
        this.left.insert(input);
      }
    } else if(input > this.value){
      if (!this.right) {
        this.right = new BinarySearchTree(input);
      } else {
        this.right.insert(input);
      }
    }
  };

  contains(input) {
    var result = false;

    var inclusionCheck = function (input) {
      if(this === undefined || this.value === undefined) {
        result = false;
      } else if(input === this.value){
        result = true;
      } else if(input < this.value){
        inclusionCheck.call(this.left, input);
      } else if(input > this.value){
        inclusionCheck.call(this.right, input);
      }
    };

    inclusionCheck.call(this, input);
    return result;
  };

  depthFirstForEach(input) {
    if(this.value){
      input(this.value);
    }
    if(this.left){
      this.left.depthFirstForEach(input);
    }

    if(this.right){
      this.right.depthFirstForEach(input);
    }
  };

  depthFirstToArray(input, vals = []) {
    if(this.value){
      vals.push(this.value);
    }
    if(this.left){
      this.left.depthFirstToArray(input, vals);
    }

    if(this.right){
      this.right.depthFirstToArray(input, vals);
    }
    return vals;
  };

  breadthFirstForEach(cb) {
    var current = [this];

    while (current.length > 0) {

      var next = [];

      for (var node of current) {

        cb(node.value);

        if (node.left) {
          next.push(node.left);
        }
        if (node.right) {
          next.push(node.right);
        }

      current = next;
      }
    }
  };

  breadthFirstToArray(vals = []) {
    let current = [this];

    while(current.length > 0){

      let next = [];

      for(var node of current) {
        vals.push(node.value);

        if(node.left){
          next.push(node.left);
        }

        if(node.right){
          next.push(node.right);
        }

      }

      current = next;
    }

    return vals;
  };
};

module.exports = BinarySearchTree;
