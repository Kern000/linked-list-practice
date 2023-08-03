const Node = require('./node');
const LinkedList = require('./linked-list');

// // ** To test Node, just uncomment

// const n1 = new Node(33);
// const n2 = new Node(34);
// const n3 = new Node(35);
// const n4 = new Node(36);
// const n5 = new Node(37);

// n1.setNext(n2);
// n2.setNext(n3);
// n3.setNext(n4);
// n4.setNext(n5);

// let length = 0;
// let currentNode = n1;
// while (currentNode != null){
//     console.log("current node value =>", currentNode.getValue());
//     currentNode = currentNode.getNext();
//     if (currentNode != null){
//         console.log("next value =>", currentNode.getValue())
//     }
//     else {
//         console.log("next value =>", null);
//     }
//     length++;
// }
// console.log("length of linked list = ", length);

// This is one way to construct linked list, purely by using node and setNext

const list= new LinkedList();
const n6 = new Node("meow")

list.push(n6);
// console.log(list);

list.push(new Node("meow2"));
// console.log(list);

list.push(new Node("meow3"));
// console.log(list);

// list.printLinkedList();
// list.findByIndex(2)

// list.linkedListLength();

list.processLinkedList((n)=>{console.log(n.getValue())})

list.insertAtIndex(0, new Node("woo"))
console.log(list)

list.deleteByIndex(1);
console.log(list)

list.printLinkedList();

