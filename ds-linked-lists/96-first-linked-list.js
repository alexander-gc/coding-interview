const _testNode = {
  value: 10,
  next: {
    value: 40,
    next: {
      value: 60,
      next: {
        value: 99,
        next: null,
      },
    },
  },
};

class Node {
  constructor(value) {
    this.node = {
      value: value,
      next: null,
    };
    return this.node;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Agregar un nodo a lo último
    const newNode = new Node(value); // { value: value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    // Agregar un nodo al inicio
    const newNode = new Node(value); // { value: value, next: null };
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  printList() {
    const values = [];
    let currentNode = this.head;

    while (currentNode != null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values);
  }

  printObj() {
    let currentNode = this.head;
    let counter = 0;

    while (counter < this.length) {
      console.log(counter + ":", currentNode);

      currentNode = currentNode.next;
      counter++;
    }
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = { value: value, next: null };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      return this.pop();
    }

    const leader = this.traverseToIndex(index - 1);
    const removedNode = leader.next;

    leader.next = removedNode.next;
    this.length--;
  }

  pop() {
    const leader = this.traverseToIndex(this.length - 2);
    leader.next = null;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // TODO: Repasar ->
  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10); // head

myLinkedList.append(40);
myLinkedList.append(60);
myLinkedList.append(99); // tail
myLinkedList.prepend(1); // new head

myLinkedList.insert(2, 98);

myLinkedList.remove(4);

myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();

/*
let obj1 = { a: "hola" };
let obj2 = obj1; // { a: "hola" };

obj2.a = "bye";
// obj2 = { a: "bye" };
// obj1 = { a: "bye" };
*/
