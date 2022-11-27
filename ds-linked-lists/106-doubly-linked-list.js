class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
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

    const newNode = { value: value, next: null, prev: null };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      return this.pop();
    }

    const leader = this.traverseToIndex(index - 1);
    const removedNode = leader.next;
    const follower = removedNode.next;

    follower.prev = leader;
    leader.next = follower;
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
}

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(12);
myDoublyLinkedList.append(60);
myDoublyLinkedList.prepend(1);

myDoublyLinkedList.insert(1, 98);

myDoublyLinkedList.remove(1);

console.log(myDoublyLinkedList);
