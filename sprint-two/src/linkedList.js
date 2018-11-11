var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let currNode = Node(value);
    let oldTail;
    if (this.head === null) {
      this.tail = currNode;
      this.head = currNode;
    } else {
      oldTail = this.tail;
      this.tail = currNode;
      oldTail.next = currNode;
    }
  };

  list.removeHead = function() {
    let oldHeadVal = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return oldHeadVal;
  };

  list.contains = function(target) {
    let currNode = this.head;
    let present = false;
    while (currNode !== null) {
      if (target === currNode.value) {
        present = true;
        break;
      } else {
        currNode = currNode.next;

      }

    }
    return present;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
