var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value; //Add value and increment size (after assigning appropriate key)
  };

  someInstance.pop = function() {
    let popped = storage[--size]; //Decrement size, get the last object
    delete storage[size];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
