var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stackObj = Object.create(stackMethods);
  stackObj.storage = {};

  return stackObj;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.size()] = value;
	},
	pop: function() {
		let last = this.size() - 1;
		let popped = this.storage[last];
		delete this.storage[last];
		return popped;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


