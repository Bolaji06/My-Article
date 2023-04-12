# Introduction to JavaScript classes: basics, syntax and example usage

### Introduction

JavaScript classes gives developers the power to organize and structure code in an object-oriented manner, classes help to create reusable, modular code that is easier to understand and maintain. On this blog post am going to walk you through how to create and use classes in JavaScript.

### What is JavaScript class

JavaScript classes are special type of function. They serves as a template for creating an object. In short JavaScript classes are nothing but another way of writing a function. We can think of a class as the sketch or plan of a house which contains how various sections of the house can be build.

### Syntax

JavaScript class can be declared and expressed just like a function.

```javascript
// Declared class
class MyClass{
    constructor(){...}
    method_1(){...}
    method_2(){...}
}


// Expressed class
const MyClass = class{
   constructor(){...}
    method_1(){...}
    method_2(){...}
}
```

For the sake of brevity, we will be sticking to the declared type throughout this post.

***class***- Keyword use to create a class

***MyClass*** - The name of a class

### How to create a class

A class can be created using the ``class`` keyword followed by a given class name, then a opening and closing curly braces { }

> For best practices the first letter of a class must begin with an uppercase

### Class Body

The body of a class is where all operations are carried out it is the part that are in between the curly braces { }. This is where class properties constructor and methods are defined, all these are called class member. Class member are defined between the braces { }.

```javascript
class Person { // start of class body
    constructor(name, age){ // constructor is a class member
        this.name = name; // name is a class member
        this.age = age; // age is a class member
    }
    getAge(){ // getAge method is a class member
        return this.age; // class member
    }
    setName(name){
        return this.name = name; // class member
    }
} // end of class body 
```

In the next section we are going to take a deep look on all the class member and how they work, but before that, let verify that class are just special function, from previous sample code.

```javascript
console.log(typeof Person) // function
```

### Constructor

Constructor are "special method" defined within a class. Constructor are just method given the name ``constructor`` . There can only be one constructor method within a class. If there are more than one ``constructor`` a syntax error is thrown. ``constructor`` method is use to initialize or hold object properties of that class. 

**Syntax**

```javascript
constructor(){/*...*/} // constructor with no parameter
constructor(){args1, args2} // constructor with two parameter
constructor(){args1, args2, /*...*/ argsN} // constructor with parameter up to N
```

```javascript
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`My name is ${this.name}, am ${this.age} years old`)
    }
}
const person1 = new Person('John', 21);
console.log(person1.sayHello()); // My name is John, am 21 years old 
```

In the example above, the Person class has a constructor which holds the person name and age properties. A person object (person1) is created and the ``new`` keyword help us to call the class constructor automatically, passing in the required argument, then we call the "sayHello()" method which help us to print out the message to the console.



### Creating  JavaScript object properties using `this` keyword

```javascript
class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}
```

In the example above we use the `this` keyword to create an object properties of "name" and "age". So, in this context `this` does more than just declare a variable; It creates a property on the instance of class.

We can also say that the left hand side which involves the `this` keyword is where we declare our variable  and the right hand side is where we pass in our value. 
