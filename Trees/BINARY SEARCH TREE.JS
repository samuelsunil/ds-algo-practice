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

  /**
   *  To insert : create  new node,
   *  If root node is null - insert to root node
   *  Keep track of the currentNode that needs to be incremented
   *  Loop through till we find the node to insert into the
   *  If currentNode is less than new node go to the left
   *  if currentNode is greater than new node push to the Right
   *
   *   current Node is 20 ,
   *   when we hit nthe left node, if null set it, if not null,
   */

  lookupNode(value) {
    /**
     * Keep looping till the value node is equal
     */
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
         return currentNode
      }
    }
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

  findMax(value) {
    
     if(!value) {
      let currentNode = this.root;
      let maxNode =this.root;
      while(currentNode){
        if(currentNode.right){
          currentNode = currentNode.right;
          maxNode = currentNode; 
        } else {
          return maxNode
        }
      }
     } else {
        let maxNode =this.root;
        let currentNode = this.lookup(value);
        while(currentNode){
          if(currentNode.right){
            currentNode = currentNode.right;
            maxNode = currentNode; 
          } else {
            return maxNode
          }
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

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(19);
tree.insert(25);
tree.insert(8);
tree.insert(10);
tree.insert(4);
//tree.insert(16);
// JSON.stringify(tree.root);
// tree.findMin(20);
console.log(tree.findMax());
// console.log(tree.root.right)
