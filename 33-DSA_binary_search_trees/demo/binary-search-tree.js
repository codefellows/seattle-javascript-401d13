'use strict';

function Node(value) {
  this.value = value || null;
  this.left = null;
  this.right = null;
};

Node.prototype.addNodeWithValue = function(value) {
  if (value === this.value) return this;

  if (value < this.value) {
    if (this.left) {
      return this.left.addNodeWithValue(value);
    }
    this.left = new Node(value);
    return this;
  }

  if (this.right) {
    return this.right.addNodeWithValue(value);
  }

  this.right = new Node(value);
  return this;
};

function BST() {
  this.root = null;
};

BST.prototype.addNodeWithValue = function(value) {
  if (!this.root) {
    this.root = new Node(value);
  }

  this.root.addNodeWithValue(value);
  return this;
};

const bst = new BST();

bst.addNodeWithValue(10);

bst.addNodeWithValue(20);
bst.addNodeWithValue(30);
bst.addNodeWithValue(40);
bst.addNodeWithValue(50);

bst.addNodeWithValue(8);
bst.addNodeWithValue(11);
bst.addNodeWithValue(22);
bst.addNodeWithValue(33);
bst.addNodeWithValue(44);

console.log(bst);
