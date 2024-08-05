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
// console.log(aniType.getName())

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
// console.log(yon)

class Car {
    constructor(color,speed) {
        this.color = color;
        this.speed = speed;
    }
    getDetail() {
        console.log(this.color + this.speed); 
    }
}

class Model extends Car{
    constructor(color,speed,model) {
        super(color,model)
        this.model = model
    }
    getDetail() {
        super.getDetail();
        return "Printing from child";
    }
}
let newModel = new Model("red",222,"Honda")
// console.log(newModel.getDetail());
/***********************************/
// destructuring
// *********************************
let obj = {
    name : "yonas",
    age : 23
}
let {name, age:grade} = obj
// console.log(name)
// console.log(grade)

let students = {
    theName: "Haile",
    theAge: 22,
    theGenderAndHeight: {
    theGender: "Male",
    theHeight: 133,
},
};

// let {theName,theAge,theGenderAndHeight:{theGender,theHeight}} = students
// console.log(theGender)
let student = {
    theName: "Haile",
    theAge: 22,
    theGender: "Male",
    theMood: "Happy",
    };
let {theName,...restProperties} = student
// console.log(restProperties)

function fullName({firstName,lastName}){
    return firstName + " " + lastName
}
console.log(fullName({firstName:"Yonas",lastName:"Negese"}))
