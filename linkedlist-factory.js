import Node from "./node-factory.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let temp = null;
    if (this.head !== null) {
      temp = this.head;
    }
    this.head = new Node(value);
    this.head.next = temp;
    console.log("prepended", this.head);
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
      console.log("appended", temp.next);
    }
  }

  size() {
    let temp = this.head;
    let length = 0;

    while (temp !== null) {
      length++;
      temp = temp.next;
    }

    return length;
  }

  listHead() {
    return this.head;
  }

  listTail() {
    let temp = this.head;
    let tail = null;

    while (temp !== null) {
      tail = temp;
      temp = temp.next;
    }

    return tail;
  }

  atIndex(targetIndex) {
    let temp = this.head;
    if (temp === null) {
      return "No Value";
    }

    for (let i = 0; i < targetIndex; i++) {
      temp = temp.next;
    }

    return temp;
  }

  pop() {
    let curr = this.head;
    let prev = null;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  contains(targetValue) {
    let doesContain = false;

    let temp = this.head;
    while (temp !== null) {
      if (temp.value === targetValue) {
        doesContain = true;
      }
      temp = temp.next;
    }

    return doesContain;
  }

  findIndex(targetValue) {
    let indexValue = 0;

    let temp = this.head;
    while (temp !== null) {
      if (temp.value === targetValue) {
        return indexValue;
      }
      temp = temp.next;
      indexValue++;
    }

    return null;
  }

  toString() {
    let temp = this.head;
    let listNodes = "";

    while (temp !== null) {
      listNodes += `(${temp.value})->`;
      temp = temp.next;
    }

    listNodes += "null";
    return listNodes;
  }

  insertAt(newValue, targetIndex) {
    if (this.head === null) {
      this.prepend(newValue);
    } else {
      let cur = this.head;
      let prev = null;
      for (let i = 0; i < targetIndex; i++) {
        prev = cur;
        cur = cur.next;
        if (cur === null) break;
      }
      const temp = new Node(newValue);
      prev.next = temp;
      temp.next = cur;
    }
  }

  removeAt(targetIndex) {
    if (this.head === null) {
      return "This list is already empty";
    } else {
      let cur = this.head;
      let prev = null;
      for (let i = 0; i < targetIndex; i++) {
        prev = cur;
        cur = cur.next;
        if (cur === null) break;
      }
      prev.next = cur.next;
    }
  }
}
