import LinkedList from "./linkedlist-factory.js";

const list = new LinkedList();

list.prepend(10);
list.append(1);
list.append(2);
list.append(3);
list.append(5);

console.log(list.toString()); // (10)->(1)->(2)->(3)->(5)->null
console.log(list.size()); // 5
console.log("The head is : ", list.listHead().value); // The head is : 10
console.log("The tail is : ", list.listTail().value); // The tail is : 5
console.log("The value of the index is : ", list.atIndex(0).value); // The value of the index is : 10
console.log("Is 5 present in the list : ", list.contains(5)); // Is 5 present in the list : true

list.pop();
console.log(list.toString()); // (10)->(1)->(2)->(3)->null

list.insertAt(4, 4);
console.log(list.toString()); // (10)->(1)->(2)->(3)->(4)->null

list.removeAt(2);
console.log(list.toString()); // (10)->(1)->(3)->(4)->null

console.log("The index of the value is : ", list.findIndex(3)); // The index of the value is : 2
