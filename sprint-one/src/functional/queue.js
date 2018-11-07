var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head + Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    let dequeued = storage[head];
    delete storage[head];
    //If queue empty, reset head to 0; otherwise move head to next in queue
    head = (Object.keys(storage).length === 0) ? 0 : head + 1;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
