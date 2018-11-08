var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  let next = this.head + this.length;
  this.storage[next] = value;
  this.length += 1;
};

Queue.prototype.dequeue = function() {
  let first = this.head;
  let dequeued = this.storage[first];
  delete this.storage[first];
  this.length = Math.max(this.length - 1, 0);
  this.head = (this.length > 0) ? first + 1 : 0;
  return dequeued;
};

Queue.prototype.size = function() {
  return this.length;
};


