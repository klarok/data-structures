var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stackObj = {};
  stackObj.storage = {};

  _.extend(stackObj, stackMethods);

  return stackObj;
};

var stackMethods = {
	pop: function() {
		let popped = this.storage[this.size() - 1];
		delete this.storage[this.size() - 1];
		return popped;
	},
	push: function(value) {
		this.storage[this.size()] = value;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


