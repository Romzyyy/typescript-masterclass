"use strict";
let planet = 'earth';
let moon = 1;
let isLarge = false;
// type basic
let age = 20;
let firstName = 'alex';
let islogin = true;
console.log(islogin);
// null & undefined
let something;
let anotherthing;
something = null;
anotherthing = undefined;
console.log(something);
console.log(anotherthing);
// array
let names = ['mari', 'peach', 'jhon'];
let ages = [20, 30, 40];
names.push('luigi');
ages.push(35);
// type inference
let fruits = ['bananas', 'mangos', 'apel'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'oranges'];
const t = things[1];
// object
let user = {
    name: 'jhon',
    age: 20,
    isLogin: true,
};
user.name = 'peach';
user.isLogin = false;
// object inference
let person = {
    name: 'mario',
    scrore: 20,
};
person.name = 'luigi';
person.scrore = 10;
const scrore = person.scrore;
// function
function addTwoNumber(a, b) {
    return a + b;
}
const substrac = (a, b) => {
    return a - b;
};
addTwoNumber(3, 7);
substrac(10, 5);
function addAllNumber(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumber([12, 32, 12, 112]);
// function inference
function hello(name, greeting) {
    return `${name}, ${greeting}`;
}
hello('jhon', 'pagi');
// type any
let count = 30;
count = 'three';
count = false;
count = [];
count = { name: 'jhon' };
// any type in array
let thought = ['hello', 20, false, null];
thought.push({ id: 123 });
// function & any
function addTogether(value) {
    return value + value;
}
const firtResult = addTogether('hello');
const secondResult = addTogether(3);
// tuples
let personTuple = ['mario', 20, true];
let hsla = [20, 'jhon', 'mario', 30];
let xy;
xy = [20, 30];
function useCord() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCord();
// named tuples
let users;
users = ['peach', 25];
console.log(users);
let userss = [];
userss = ['peach', true, 'banana', 20];
