class Node{
// create 'node' the basic unit to hold data and reference next

    constructor(value, next=null){      // if next not given value, will be null
        this.value = value;
        this.next = next;
    }
    
    setValue(value){                    // Create / update
        this.value = value;
    }

    setNext(next){                      // Create / update
        this.next = next;
    }

    getValue(){                         // Read
        return this.value;
    }

    getNext(){                          // Read
        return this.next;
    }
}

module.exports = Node;