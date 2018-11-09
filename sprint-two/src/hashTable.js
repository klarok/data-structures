

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
    
  }
  
  let existingIndex = this.findkey(bucket, k);
  if (existingIndex === -1) {
    bucket.push([k, v]);
  } else {
    bucket[existingIndex][1] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  // for (var i = 0; i < bucket.length; i++ ) {
  //   if (bucket[i][0] === k) {
  //     return bucket[i][1];
  //   }
  // }
  let existingIndex = this.findkey(bucket, k);
  return (existingIndex !== -1) ? bucket[existingIndex][1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let existingIndex = this.findkey(bucket, k);
  bucket.splice(existingIndex, 1);
};

HashTable.prototype.findkey = function(bucket, k) {
  let existingIndex = -1;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      existingIndex = i;
    }
  }
  return existingIndex;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


