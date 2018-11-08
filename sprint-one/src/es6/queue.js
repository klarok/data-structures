class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
    this.head = 0;
  }

  enqueue(value) {
    this.storage[this.head + this.length] = value;
    this.length += 1;
  }

  dequeue() {
    let first = this.head;
    let dequeued = this.storage[first];
    delete this.storage[first];
    this.length = Math.max(this.length - 1, 0);
    this.head = (this.length === 0) ? 0 : this.head + 1;
    return dequeued;
  }

  size() {
    return this.length;
  }

}
