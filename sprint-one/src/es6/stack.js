class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length += 1;
  }

  pop() {
    let last = this.length - 1;
    let popped = this.storage[last];
    delete this.storage[last];
    this.length = Math.max(last, 0);
    return popped;
  }

  size() {
    return this.length;
  }

}