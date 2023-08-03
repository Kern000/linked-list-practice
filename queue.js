class Queue {
    constructor(items = []){
        this.items = items;
    }

    enqueue(newItem){
        this.items.unshift(newItem);    //insert from start of array
    }

    dequeue(){
        this.items.shift();     // remove first item and returns it
    }
    
    clearQueue(){
        this.items = [];
    }

    showQueue(){
        return this.items.slice();
    }
}
