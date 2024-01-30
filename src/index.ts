let planet = 'earth'
let moon = 1
let isLarge = false

// type basic

let age: number = 20
let firstName: string = 'alex'
let islogin: boolean = true
console.log(islogin)

// null & undefined
let something: null
let anotherthing: undefined

something = null
anotherthing = undefined
console.log(something)
console.log(anotherthing)

// array
let names: string[] = ['mari', 'peach', 'jhon']
let ages: number[] = [20, 30, 40]

names.push('luigi')
ages.push(35)

// type inference
let fruits = ['bananas', 'mangos', 'apel']
fruits.push('peaches')

const f = fruits[3]

let things = [1, true, 'oranges']

const t = things[1]

// object
let user: { name: string; age: number; isLogin: boolean } = {
    name: 'jhon',
    age: 20,
    isLogin: true,
}

user.name = 'peach'
user.isLogin = false

// object inference
let person = {
    name: 'mario',
    scrore: 20,
}

person.name = 'luigi'
person.scrore = 10

const scrore = person.scrore

// function
function addTwoNumber(a: number, b: number): number {
    return a + b
}

const substrac = (a: number, b: number): number => {
    return a - b
}

addTwoNumber(3, 7)
substrac(10, 5)

function addAllNumber(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

addAllNumber([12, 32, 12, 112])

// function inference
function hello(name: string, greeting: string): string {
    return `${name}, ${greeting}`
}

hello('jhon', 'pagi')
