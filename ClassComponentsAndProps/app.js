// Class components and Props
// **************************
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}
let abe = new Person("Abebe",21);
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
