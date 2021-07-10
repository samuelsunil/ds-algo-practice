class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *  Implement a BST node
 *  IMplement a PreOrder, InOrder, Post ORder using Recursion.
 *  Check if 2 Binary Trees are Identical.
 *  Write an In-Order Iterator for a Binary Tree.
 *  Write an Iterative In-Order Traversal of Binary Trees.
 *  In-order Successor of Binary Search Trees.
 *
 *
 */

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    /***
     * Start with the root
     * If null return
     * If duplicate value
     * If value is less that node move left, if left exists, if
     * If value is greater than node move right
     */
    if (!this.root) {
      this.root = new Node(value);
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);
          break;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);
          break;
        }
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

  preOrder() {
    const output = [];
    function preOrderImpl(node) {
      if (!node) {
        return;
      }
      output.push(node.value);
      preOrderImpl(node.left);
      preOrderImpl(node.right);
    }

    preOrderImpl(this.root);

    console.log(output);
  }

  inOrder() {
    const output = [];
    function inOrderImpl(node) {
      if (!node) {
        return;
      }
      inOrderImpl(node.left);
      output.push(node.value);
      inOrderImpl(node.right);
    }

    inOrderImpl(this.root);

    console.log(output);
  }

}


class InOrderIterator {

    constructor(root){
       this.root = root;
       this.populateStack(this.root)
    }
     stack = [];

     populateStack(node) {
      while (node) {
        this.stack.push(node);
        node = node.left;
      }
    }

     hasNext() {
      if (this.stack.length <= 0) {
        return false;
      }
      return true;
    }

     getNext() {
      if (this.hasNext()) {
          const node = this.stack.pop();
          console.log(node.value)
          if(node.right) {
            this.populateStack(node.right)
          }
      } else {
          console.log("End of tree")
      }
    }
  
}


let root1 = new BST();
root1.insert(50);
root1.insert(200);
root1.insert(25);
root1.insert(125);
root1.insert(350);
root1.insert(11);

// root1.insert(50);
// root1.insert(200);
// root1.insert(25);
// root1.insert(125);
// root1.insert(350);

root1.inOrder();

let root2 = new BST();

root2.insert(50);
root2.insert(200);
root2.insert(25);
root2.insert(125);
root2.insert(350);
root2.insert(11);

root2.inOrder();

let count = 0;
//  Check if 2 Binary Trees are Identical.
const areIdentical = function (root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (
      root1.data === root2.data &&
      areIdentical(root1.left, root2.left) &&
      areIdentical(root1.right, root2.right)
    );
  }

  return false;
};

areIdentical(root1.root, root2.root);


const iterator = new InOrderIterator(root1.root)
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()
iterator.getNext()