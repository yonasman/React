// Class components and Props
// **************************

// let abe = new Person("",21);
// console.log((Person.__proto__))
// constructor
function Animal(name,color) {
    this.name = name;
    this.color = color;
    this.getName =  function() {
        return this.name;
    }
}
let d = new Animal("Dog","black")
// console.log(d.getName())

class Type extends Animal {
    constructor(a,b,c) {
        super(a,b);
        this.type = c
    }
}
let aniType = new Type("Dog","black","Domestic")
// console.log(aniType)

const Rectangle = class {
    constructor(width,height) {
        this.width = width;
        this.height = height
    }

    get recWidth() {
        return this.width
    }
    set recHeight(height) {
        this.height = height
    }
}

// traditional inheritance
function Person(name,age) {
        this.name = name
        this.age = age
}

function Student(name,age,grade) {
        this.grade = grade;
        Person.call(this,name,age)
}
// console.log(Student.prototype)
Student.prototype = Object.create(Person.prototype);
// console.log(Student.prototype)
let yon = new Student("John",23,12)
console.log(yon)
