var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stackObj = {};
  stackObj.storage = {};
  stackObj.length = 0;

  _.extend(stackObj, stackMethods);

  return stackObj;
};

var stackMethods = {
  pop: function() {
    let popped = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length = Math.max(this.length - 1, 0);
    return popped;
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length += 1;
  },
  size: function() {
    //return Object.keys(this.storage).length;
    return this.length;
  }
};


