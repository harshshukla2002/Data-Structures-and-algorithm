// Delete last occurrence of an item from linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function display(head) {
  let temp = head;
  let res = "";
  while (temp != null) {
    res += temp.data;
    temp = temp.next;
  }
  console.log(res);
}

function deleteLast(head, x) {
  let temp = head;
  let ptr = null;
  while (temp != null) {
    if (temp.data == x) ptr = temp;
    temp = temp.next;
  }

  if (ptr != null && ptr.next == null) {
    temp = head;
    while (temp.next != ptr) {
      temp = temp.next;
    }
    temp.next = null;
  }

  if (ptr != null && ptr.next != null) {
    ptr.data = ptr.next.data;
    temp = ptr.next;
    ptr.next = ptr.next.next;
  }
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.next = new Node(4);

head = deleteLast(head, 4);

display(head);
