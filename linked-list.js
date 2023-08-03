const Node = require('./node');

class LinkedList {

    constructor(head = null){
        this.head = head;
    }
    
    //utility methods for link list class
    linkedListLength(){
        let currentNode = this.head;
        let count = 0;
        while (currentNode !== null){
            currentNode = currentNode.getNext();
            count++
        }
        console.log("Linked List Length is =>", count)
        return count
    }

    findByIndex(index){
        let currentNode = this.head;
        for(let i=0; i < index; i++){
            currentNode = currentNode.getNext();
        }
        console.log(currentNode);
        return currentNode;
    }

    printLinkedList(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log('value of node =>', currentNode.getValue())
            if (currentNode.next != null){
            console.log('value of next =>', currentNode.next.getValue())
            }
            currentNode = currentNode.getNext();
        }
    }

    processLinkedList(externalFunction){
        let currentNode = this.head;
        while (currentNode != null){
            externalFunction(currentNode);
            currentNode = currentNode.getNext();
            }
    }                                                   //iterate through the link list to process it - can filter, map etc.

    // CRUD operations for Linked List

    push(newNode){                                      //push node onto end of linked list
        if (this.head == null){
            this.head = newNode;
            return;
        }
        else {
            let currentNode = this.head;
            while(currentNode.getNext() !== null){
                currentNode = currentNode.getNext();
            }
            currentNode.setNext(newNode);
        }
    }

    insertAtIndex(index, newNode){
        if (index < 0 && this.head == null){
            return;
        }
        else if (index == 0 && this.head == null){
            this.head = newNode;
            return;
        }
        else if (index == 0 && this.head !== null){
            newNode.setNext(this.head);             //current head set as next node
            this.head = newNode;
            return;
        }
        else {
            let currentNode = this.head;
            console.log(currentNode);
            for (let i = 0; i < index - 1; i++){
                if(currentNode == null){
                    throw new Error("Invalid Index")
                }
                currentNode = currentNode.getNext();
                console.log(currentNode)
            }                                           // at node before insertion of newNode -> this will allow us to set newNode as next of currentNode after we set newNode's next
            newNode.setNext(currentNode.getNext());
            currentNode.setNext(newNode);
            return;            
        }
    }


    deleteByIndex(index){
        if (this.head == null){
            return;
        } 
        else if (index < 0 || index >= this.linkedListLength()){
            return;
        }
        else if (index == 0){
            this.head = this.head.getNext();
        }
        else {
            let currentNode = this.head;
            for (let i=0; i< index -1; i++){
                currentNode = currentNode.getNext();
            }
            currentNode.setNext(currentNode.getNext().getNext())
            return
        }
    }

}

module.exports = LinkedList;



