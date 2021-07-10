class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value >= currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  
  lookup(value) {
    //Is the root the value ?
    // Set the current node
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  // if param is empty - find the min starting from the Root
  // if the value is provided, search node and fine the min from there on .
  findMin(value) {
    if (!value) {
      let currentNode = this.root;
      let minNode = this.root;
      while (currentNode) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          minNode = currentNode;
        } else return minNode;
      }
    } else {
      let currentNode = this.lookup(value);
      let minNode = currentNode;
      while (currentNode) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          minNode = currentNode;
        } else return minNode;
      }
    }
  }

  //   remove(value) {
  //     if(!this.root) {
  //       return;
  //     }
  //     let currentNode = this.root;
  //     let parentNode = null;
  //     while(currentNode) {

  //       if(value < currentNode.left) {
  //         parentNode = currentNode;
  //         currentNode = currentNode.left
  //       } else if(value > currentNode.right ) {
  //         parentNode = currentNode;
  //         currentNode = currentNode.right
  //       } if(value === currentNode.value) {

  //         //Option 1: No Right child
  //         if(currentNode.right.)

  //       }
  //     }
  //   }
}

BinarySearchTree.prototype.preOrder = function () {
  var output = [];
  function preOrderImpl(node) {
    if (node == null) {
      return;
    }
    output.push(node.value);
    preOrderImpl(node.left);
    preOrderImpl(node.right);
  }
  preOrderImpl(this.root);
  return output;
};

BinarySearchTree.prototype.removeNode = function (key) {
  this.removeImpl(key, this.root);
};

BinarySearchTree.prototype.removeImpl = function (key, node) {
  // Use the predecessor to to find the node
  // If node has a left child
  // If node has a right child
  // if node has a left and a right
  // make it recursive

  if (node != null) {
    if (key < node.data) {
        node.left = this.removeImpl(key, node.left)
    } else if (key > node.data) { 
      node.right = this.removeImpl(key, node.right)
    } else {
      if(node.left && node.right) {
        // Replace current node with 
        // predecessor data
         node.data = this.maximum(node.left)
         node.left = this.removeImpl(node.data, node.left)
      } else {
        // Only 1 child.
        // Let's return the child that's valid.
         node = node.left || node.right
      }
       
    }
  }

  return node;
};


BinarySearchTree.prototype.maximum = function ( node) {
   while(node.right) {
     node = node.right
   }

   return node.data
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(16);
JSON.stringify(tree.root);
// tree.findMin(20);

tree.preOrder();
