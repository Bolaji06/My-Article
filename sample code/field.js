
class Employee{
    #name = 'JANE';
    id = 1121;

    details(){
        console.log(this.#name + ' with ' + this.id + ' id' + 'works here');
    }
}
const emplyee = new Employee
//emplyee.details()

class Calculator{
    static add(a, b){
        return a + b;
    }
    static sub(a, b){
        return a - b;
    }
}
//console.log(Calculator.add(10, 23));
const name = 'BOLAJI';
//console.log(name.split('').reverse().join(''))

function reversal(str){
    return str.split('').reverse().join('');
}
console.log(reversal('BOLAJOKO'))