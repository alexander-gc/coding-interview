class Node {
  constructor(value) {
    this.node = {
      value: value,
      next: null,
    };

    return this.node;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    // Conocer el primero
    return this.first;
  }

  enqueue(value) {
    // Agregar después de first
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.length++;

      return this;
    }

    this.last.next = newNode;
    this.last = newNode;

    this.length++;

    return this;
  }

  dequeue() {
    // Remover el primero
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Juan"); // 1 -> First
myQueue.enqueue("Alex"); // 2
myQueue.enqueue("Jessi"); // 3
myQueue.enqueue("Taeyi"); // 4 -> Last

console.log(myQueue);

console.log("First:", myQueue.peek());

// Juan -> First
// Alex
// Jessi
// Taeyi
// Bety -> Last
