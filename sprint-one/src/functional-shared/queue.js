var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let queueObj = {};
  queueObj.storage = {};
  queueObj.head = 0;

  _.extend(queueObj, queueMethods);
  return queueObj;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.head + this.size()] = value;
	},
	dequeue: function() {
		let dequeued = this.storage[this.head];
		delete this.storage[this.head];
		this.head = (this.size() > 0) ? this.head + 1 : 0;
		return dequeued;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


