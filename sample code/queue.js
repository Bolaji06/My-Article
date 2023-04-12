
class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(item){
       return this.items.unshift(item);
    }
    dequeue(item){
        return this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        if (this.items.length === 0){
            return true;
        }
        else {
            return false;
        }
    }
    size(){
        return this.items.length;
    }
    deleteAll(){
        this.items.length = 0;
    }
    print(){
        console.log(this.items);
    }
}
const animal = new Queue();
animal.enqueue('CAT');
animal.enqueue('DOG');
animal.enqueue('GOAT');
animal.enqueue('COW');
animal.enqueue('BEAR');

//animal.dequeue()
console.log(animal.front());
console.log(animal.isEmpty())
console.log(animal.size())
//console.log(animal.deleteAll())

animal.print();