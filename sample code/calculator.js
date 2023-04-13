class Calculator{
    addition(a, b){
        return a + b
    }
    subtraction(a, b){
        return a - b
    }
    multiply(a, b){
        return a * b
    }
    division(a, b){
        return a / b
    }
}
const calc = new Calculator();

const add = calc.addition(10, 2);
console.log(add);

const sub = calc.subtraction(10, 2);
console.log(sub);

const mul = calc.multiply(10, 2);
console.log(mul);

const div = calc.division(10, 2);
console.log(div);

// class Person{
//     name = 'Sam'
//     sayHello(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// const person1 = new Person();
// person1.sayHello(); // Hello Sam

class Person2 { // class body    
    constructor(name, age){ // class member
        this.name = name;
        this.age = age;
    }
    getName(){ // class member
        console.log(this.name);
    }
    getAge(){ // class member
        console.log(this.age);
    }
} // end of class body

const human = new Person2('Josh', 34)
human.getName();
human.getAge();

