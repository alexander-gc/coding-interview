const strings = ["b", "c", "d"];

strings.push("e");

strings.pop();

strings.unshift("a");

strings.splice(1, 0, "C"); // index, insert o replace, value

// 69. Implementing An Array.

class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[0] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.pop();
    //delete this.data[this.length - 1];
    //this.length--;
  }
}

const arr = new NewArray();

arr.push("b");
arr.push("c");
arr.push("d");
arr.push("e");
arr.push("i");
arr.push("j");
arr.push("k");

//arr.pop()
//arr.delete(1);

arr.unshift("a");

console.log(arr);
