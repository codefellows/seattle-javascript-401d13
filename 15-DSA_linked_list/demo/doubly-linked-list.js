'use strict';

function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    return node.val;
  };

  node.next = this.head;
  this.head.prev = node;
  this.head = node;

  return node.val;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if(!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  };

  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

var dll = new DoublyLinkedList();

dll.prepend(3);
dll.prepend(2);
dll.prepend(1);

dll.append(4);
dll.append(5);
dll.append(6);

console.log(dll);
