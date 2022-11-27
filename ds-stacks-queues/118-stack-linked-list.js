class Node {
  constructor(value) {
    this.node = {
      value: value,
      next: null,
    };

    return this.node;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    // Conocer el tope
    return this.top.value;
  }

  push(value) {
    // Agregar en el tope
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;

      return this;
    }

    const holdingPointer = this.top;
    this.top = newNode;
    this.top.next = holdingPointer;

    this.length++;
    return this;
  }

  pop() {
    // Remover el tope
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }

  list() {
    let currentNode = this.top;
    let counter = 0;

    while (counter < this.length) {
      console.log(counter + ":", currentNode);

      currentNode = currentNode.next;
      counter++;
    }
  }
}

const myStack = new Stack();

myStack.push(10); // 1 -> Bottom
myStack.push(33); // 2
myStack.push(99); // 3
myStack.push(1000); // 4 -> Top

console.log(myStack);

//console.log(myStack.peek());
