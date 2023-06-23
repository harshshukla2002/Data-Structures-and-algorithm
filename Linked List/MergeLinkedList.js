// merge two sorted linked list

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToTheLast(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next != null) temp = temp.next;
      temp.next = node;
    }
  }

  printList() {
    let temp = this.head;
    let res = "";
    while (temp != null) {
      res += temp.data + " ";
      temp = temp.next;
    }
    console.log(res);
  }
}

const MergeLinkedList = (head1, head2) => {
  let temp = new Node(0);

  let tail = temp;

  while (true) {
    if (head1 === null) {
      tail.next = head2;
      break;
    }
    if (head2 === null) {
      tail.next = head1;
      break;
    }

    if (head1.data <= head2.data) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }
  return temp.next;
};

let llist1 = new LinkedList();
let llist2 = new LinkedList();

llist1.addToTheLast(new Node(5));
llist1.addToTheLast(new Node(10));
llist1.addToTheLast(new Node(15));

llist2.addToTheLast(new Node(2));
llist2.addToTheLast(new Node(3));
llist2.addToTheLast(new Node(20));

llist1.head = MergeLinkedList(llist1.head, llist2.head);
llist1.printList();
