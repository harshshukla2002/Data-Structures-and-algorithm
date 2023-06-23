// Add 1 to a number represented as linked list

class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function newNode(data) {
  var new_node = new Node();
  new_node.data = data;
  new_node.next = null;
  return new_node;
}

const AddWithCarry = (head) => {
  if (head === null) return 1;
  let res = head.data + AddWithCarry(head.next);

  head.data = res % 10;
  return parseInt(res / 10);
};

const AddOneToLinkedList = (head) => {
  let carry = AddWithCarry(head);
  let newNodes = null;

  if (carry > 0) {
    newNodes = newNode(carry);
    newNodes.next = head;
    return newNodes;
  }
  return head;
};

function printList(node) {
  let res = "";
  while (node != null) {
    res += node.data;
    node = node.next;
  }
  console.log(res);
}

var head = newNode(1);
head.next = newNode(9);
head.next.next = newNode(7);
head.next.next.next = newNode(9);

head = AddOneToLinkedList(head);
printList(head);
