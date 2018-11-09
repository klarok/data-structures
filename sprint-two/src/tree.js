var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);
  newTree.children = []; 
    

  // fix me
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  //console.log('Tree ' + this.value + ' added child');
  //console.log(this.children);
  
};

treeMethods.contains = function(target) {
  let isThere = false;
  if (this.value === target) {
    return true;
    
  } else if (this.children.length === 0) {
    return false;
      
  } else {
    //this.children.forEach(function(child) {
    //isThere = isThere || child.contains(target);
    //});
    for (var i = 0; i < this.children.length; i++) { 
      isThere = this.children[i].contains(target);
      if (isThere) {
        break;
      }
    }
  }
  return isThere;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
