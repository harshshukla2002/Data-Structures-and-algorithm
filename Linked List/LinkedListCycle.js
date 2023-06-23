// Given a linked list, check if the linked list has a loop (cycle) or not. The below diagram shows a linked list with a loop.

let head;

class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

function push(new_data) {
  let new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

const LinkedListCycle = () => {
  let slow = head;
  let fast = head;
  let flag = 0;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      flag = 1;
      break;
    }
  }

  console.log(flag === 1 ? "Loop" : "no Loop");
};

push(20);
push(4);
push(15);
push(10);

head.next.next.next.next = head;

LinkedListCycle();
