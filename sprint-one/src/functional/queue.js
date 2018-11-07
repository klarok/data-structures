var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storesize = Object.keys(storage).length
  var addcount = 0;
  var removecount = 0;
  var first = ''

  // Implement the methods below

  someInstance.enqueue = function(value) {
  addcount +=1
  if(storesize === 0){
    storage[storesize] = value;
    first = storage[storesize]
    storesize +=1
  }
  else{
    storage[JSON.stringify(storesize)]= value
      storesize+=1
  }
    

  };

  someInstance.dequeue = function() {
    removecount +=1
    var rvar = ''
    if(storesize === 0 ){
      return storage;
    }
    else{
     console.log(storage)
     console.log('removing')
     //console.log(JSON.stringify(storesize-1))
     console.log(storage[JSON.stringify(storesize-1)])
     rvar = first
     delete first
     storesize = storesize-1
     first = storage[storesize]
     return rvar
    }

  };

  someInstance.size = function() {
    if(removecount > addcount){
      return 0;
    }
    else{
      return storesize;}
    
  };


  return someInstance;
};
