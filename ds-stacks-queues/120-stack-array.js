class arrayStack {
  constructor() {
    this.data = []; // ["Google", "Udemy", "Youtube"] <- Youtube es el top
    this.length = 0;
  }

  peek() {
    // Conocer el tope
    return this.data[this.length - 1];
  }

  push(value) {
    // Agregar en el tope
    this.data.push(value);
    this.length++;

    return this.data;
  }

  pop() {
    // Remover el tope

    this.data.pop();
    this.length--;

    return this.data;
  }
}

const myStack = new arrayStack();

myStack.push(10); // 1 -> Bottom
myStack.push(20); // 2
myStack.push(33); // 3 -> Top

myStack.pop();

console.log(myStack);

console.log("Top:", myStack.peek());

class objStack {
  /*
    this.data = {
        "0": "Google" <- Bottom
        "1": "Udemy"
        "2": "Discord" <- Top
    }
  */

  constructor() {
    this.data = {};
    this.length = 0;
  }

  peek() {
    // Conocer el tope
    return this.data[this.length - 1];
  }

  push(value) {
    // Agregar en el tope
    this.data[this.length] = value;
    this.length++;

    return this.data;
  }

  pop() {
    // Remover el tope
    delete this.data[this.length - 1];

    this.length--;

    return this.data;
  }
}

/*
const myStack = new objStack();

myStack.push("Google"); // 1 -> Bottom
myStack.push("Udemy"); // 2
myStack.push("Discord"); // 3 -> Top

console.log(myStack);

console.log("Top:", myStack.peek());
*/
