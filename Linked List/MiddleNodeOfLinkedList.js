var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function pushNode(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

const getLength = () => {
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }
  return length;
};

const MiddleNode = () => {
  if (head !== null) {
    let len = getLength();
    let temp = head;
    let mid = len / 2;
    while (parseInt(mid) !== 0) {
      temp = temp.next;
      mid--;
    }
    console.log(temp.data);
  }
};

for (let i = 5; i >= 1; i--) {
  pushNode(i);
}

MiddleNode();
