// declaring data types
var id = 5;
var isSupported = true;
var a = "Hello";
// arrays
var ids = [1, 2, 3];
// tuples
var person = [1, "Yon"];
var employees;
employees = [
    [1, "yon"],
    [2, "Job"]
];
// console.log(employees)
// unions
var pid = 22;
var user = {
    id: 1,
    name: "yon"
};
// type assertion
var cid;
// let customerId = <number> cid
var customerId = cid;
customerId = 2;
// functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1,2))
// void
function log(message) {
    console.log(message);
}
var user2 = {
    id: 3,
    name: "Yon",
};
var add = function (x, y) { return x + y; };
console.log(add(1, 2));
