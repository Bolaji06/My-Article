# Introduction to JavaScript classes: basics, syntax and example usage

### Introduction

JavaScript classes gives JavaScript developers the power to organize and structure code in an object-oriented manner. Classes help to create reusable, modular code that is easier to understand and maintain. In this blog post, I'm going to walk you through how to create and use classes in JavaScript.

### What is JavaScript Classes?

JavaScript classes are special type of function that serves as a template for creating an object. In short, JavaScript classes are nothing but another way of writing a function. We can think of a class as the sketch or plan of a house which contains how various sections of the house can be built.

### Syntax

JavaScript class can be declared and expressed just like a function.

```javascript
// using declared class
class MyClass {
    constructor(){/*...*/}
    method_1(){/*...*/}
    method_2(){/*...*/}
}


// using expressed class
const MyClass = class {
   constructor(){/*...*/}
    method_1(){/*...*/}
    method_2(){/*...*/}
}
```

You can read more about [class declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) and [class expression]([class expression - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)). For the sake of brevity, we will be sticking to the declared type throughout this post.

***class*** - keyword use to create a class

***MyClass*** - the name of a class

### How to create a class

A class can be created using the ``class`` keyword followed by a given class name, then an opening and closing curly braces { }.

> For best practices, the first letter of a class must begin with an uppercase.

### Class Body

The body of a class is where all operations are carried out. It is the part that is in between the curly braces {  }. This is where class properties, constructor and methods are defined. All these are called class members. which are defined between the braces { }.

```javascript
class Person { // creates a new class named 'Person'
    constructor(name, age){ // class member (constructor)
        this.name = name; // class member (property)
        this.age = age; // class member (property)
    }
    getAge(){ // class member (method)
        return this.age; 
    }
    setName(name){ // class member (method)
        return this.name = name; 
    }
} // end of class body 
```

In the next section, we are going to take a deep look at all the class members and how they work. But before that, let's verify that JavaScript classes are just special functions, from the previous code sample.

```javascript
console.log(typeof Person) // function
```

### Constructor

Constructors are ***special methods*** defined within a class that are used for creating and initializing object instances of that class. Constructors are just methods given the name ``constructor`` . The `constructor` method is used to initialize or hold object properties of that class. 

There can only be one constructor method within a class. If there is more than one ``constructor``, a syntax error is thrown. The `constructor` method  is called automatically when a new instance of a class is created using the `new` keyword.

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

In the example above, the Person class has a constructor which holds the person name and age properties. A person object (person1) is created with the ``new`` keyword which help us to call the class constructor automatically, passing in the required argument, then we call the "sayHello" method which help us to print out the message to the console.

### Creating  JavaScript Object Properties Using `this` Keyword

In JavaScript class `this` keyword can be used to access and modify the properties and methods of the current class instance. When we use `this` in a class we are essentially referring to the current instance of a class, rather than creating a new variable.

In a way, we could say that `this` in JavaScript class is like declaring a variable for that instance of a class. However, it's important to understand that `this` is not exactly the same as a variable declaration.

When we use `this` in a JavaScript class, you are not explicitly declaring a new variable. Instead, you are referring to the current instance of the class and accessing or modifying its properties and method.

For example, when we declare a property in the constructor of a class using `this`, we are not creating a variable in the global scope. Instead, we are setting a property on the current instance of the class, which can be **accessed** and **modified** using `this`.`

```javascript
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }

    rectInfo(){
        console.log(`Rectangle is ${this.width}x${this.height} dimension with ${this.area()} area`);
    }
}
const rect1 = new Rectangle(10, 6);

console.log(rect1.area()); // 60
rect1.rectInfo() // Rectangle is 10x6 dimension with 60 area
```

In the example above we create a "Rectangle" class with a constructor that sets the "height" and "width" properties for each instance class using `this`. We also create the "area" method that uses `this` to access the "height" and "width" properties of the current instance and return the area of the rectangle. Additionally, we define a "rectInfo" method that displays some information of the rectangle by using `this` to access the "height" and "width" object properties with the "area" method.

Later on, we create a new instance of "Rectangle" class using the `new` keyword. Then we pass in the "height" and "width" values. We call the "area" method using the class instance "rect1".

Next, we call the "rectInfo" method using the class instance "rect1", which prints the rectangle "width" and "height".

### Field

JavaScript class fields are new feature in ECMAScript 2022, which allows you to define object properties directly within a class body, without the need to define them within the constructor method. This can make your code cleaner and easier to read and can also reduce the amount of code you need to write. Fields are nothing but variables that hold information that is specific to a class. A field can be private or public.

Private field can only be accessed within its class definition.  Accessing a private field outside its class definition will raise a syntax error. A private field is declared with `#` (hash tag) followed by the field name (pronounced ***hash names***). 

Public fields, on the other hand, can be access outside it class definition. By default, a field is public in nature.



> A field will return undefined without an initializer

```javascript
class Employee {
    name = "Jane";
    #id = 1123;

    details(){
        console.log(`${this.name} with ${this.#id} ID works here`);
    }
}
const jane = new Employee()
jane.details() // Jane with 1123 ID works here

console.log(jane.#id) // SyntaxError: Private field '#id' must be declared in an enclosing class
```

In the example above, we declared a public field of "name" and initialize it with with a string "Jane". We also declared a private field "#id" and we initialize it with some numbers "1123". We defined a "details" method which prints out the details of the employee.

We create a class object "jane",  then will call the details method. Later, we tried to call the private field object property "#id", which throw a "SyntaxError".

### JavaScript Class Method

JavaScript class method is a function that is defined as a property of a class. It is used to define behavior that is specific to the class. Class methods help you to perform specific actions that are related to the class. In JavaScript, a function within a class is called a method.

JavaScript classes make use of method definitions, which are a shorter syntax for function property in an object initializer.

**Syntax:**

```javascript
class MyClass{
    method_1(){/*...*/}
    method_2(){/*...*/}
}
```

```javascript
class Calculator{
    addition(a, b){ // addition method
        return a + b
    }
    subtraction(a, b){ // subtraction method
        return a - b
    }
    multiply(a, b){ // multiply method
        return a * b
    }
    division(a, b){ // division method
        return a / b
    }
}
const calc = new Calculator();

const add = calc.addition(10, 2);
console.log(add); // 12

const sub = calc.subtraction(100, 20);
console.log(sub); // 80

const mul = calc.multiply(10, 2);
console.log(mul); // 20

const div = calc.division(10, 2);
console.log(div); // 5
```

In this example, our "Calculator" class has four methods that perform different   actions. We created an instance of the class "calc", which we use to access all the various methods in the class.

### Creating Class Instances

After we must have drawn the sketch and plan (template) of our building, the next step we need to take is to start building our house based on the plan that we have. With this plan at hand, we can build hundreds of houses.

An instance of a class is an individual object created from a class template. When a class instance is created, it inherits all the properties and methods defined in the class. However, each instance that we create is a separate object with its own unique state. so any changes made to one instance will not affect other instances of the same class.

**Syntax:**

```javascript
const objName = new ClassName()
```

 Let revisit one of our previous examples:

```javascript
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    rectInfo(){
        console.log(`Rectangle is ${this.width}x${this.height} with ${this.area()} area`);

    }
}
const rect1 = new Rectangle(10, 6); // class instance 'rect1'
const rect2 = new Rectangle(20, 10); // class instance 'rect2'
const rect3 = new Rectangle(8, 3); // class instance 'rect3'

console.log(rect1.area()); // 60
rect1.rectInfo() // Rectangle is 10x6 with 60 area

console.log(rect2.area()); // 200
rect2.rectInfo(); // Rectangle is 20x10 with 200 area

console.log(rect3.area()); // 24
rect3.rectInfo(); // Rectangle is 8x3 with 24 area
```

In this example we created three different rectangles based on the template (class) we have. We created the instances of the class "rect1", "rect2" and "rect3" using the `new` keyword followed by the class name "Rectangle". Then, we passed in our constructor values, which are also the class properties. When the instances are created using the `new` keyword, they inherit the "width", "height" properties and the "area", "rectInfo" method. Then we called the class methods "area()" and "rectInfo()" using the created class instances.

### Summary

In this blog post, we discussed what classes are and how they can be created. Then we delved into class members such as constructors, how to use `this` keyword, and explained what fields and methods are. Lastly, we demonstrated how object instances can be created.

### Conclusion

JavaScript classes are essential concept for building complex web applications. They provide a way to create reusable objects with predefined properties and methods enabling encapsulation, and making the code easier to maintain.
