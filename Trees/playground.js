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
  constructor(value) {
    this.root = new Node(value);
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

let root1 = new BST(100);

root1.insert(50);
root1.insert(200);
root1.insert(25);
root1.insert(125);
root1.insert(350);

root1.inOrder();
