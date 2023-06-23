// Remove node from nth number from last

class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function create(head, x) {
  var temp,
    ptr = head;
  temp = new Node();
  temp.data = x;
  temp.next = null;
  if (head == null) head = temp;
  else {
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = temp;
  }
  return head;
}

const RemoveNode = (head, k) => {
  let len = 0;
  let temp = head;

  while (temp !== null) {
    len++;
    temp = temp.next;
  }

  let diff = len - k;
  let curr = head;
  let prev = null;

  for (let i = 0; i < diff; i++) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;
  return head;
};

function display(head) {
  var temp = head;
  let res = "";
  while (temp != null) {
    res += temp.data + " ";
    temp = temp.next;
  }
  console.log(res);
}

var head = null;

head = create(head, 1);
head = create(head, 2);
head = create(head, 3);
head = create(head, 4);
head = create(head, 5);

var n = 2;

head = RemoveNode(head, 2);
display(head);
