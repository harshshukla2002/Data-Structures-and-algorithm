// Given a pointer to the head node of a linked list, the task is to reverse the linked list

let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const ReverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

let Head = ReverseLinkedList(head);

while (Head !== null) {
  console.log(Head.data);
  Head = Head.next;
}
