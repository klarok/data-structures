var BinarySearchTree = function(value) {
  var newTree = Object.create(BSTmethods);
  newTree.value = value || null;
  newTree.left = null;
  newTree.right = null;
  
  
  
  return newTree;
};

var BSTmethods = {};

BSTmethods.insert = function(value) {
  let newNode = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
    
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
  
};

BSTmethods.contains = function(target) {
  console.log(this.right);
  if (target === this.value) {
    return true;
  } else if (target < this.value && this.left !== null) {
    return this.left.contains(target);
  } else if (target > this.value && this.right !== null) {
    return this.right.contains(target);
  } else {
    return false;
  }
  
};

BSTmethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  
  
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
