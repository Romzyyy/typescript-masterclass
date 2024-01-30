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

// type any
let count: any = 30

count = 'three'
count = false
count = []
count = { name: 'jhon' }

// any type in array
let thought: any[] = ['hello', 20, false, null]
thought.push({ id: 123 })

// function & any
function addTogether(value: any): any {
    return value + value
}

const firtResult = addTogether('hello')
const secondResult = addTogether(3)

// tuples
let personTuple: [string, number, boolean] = ['mario', 20, true]

let hsla: [number, string, string, number] = [20, 'jhon', 'mario', 30]

let xy: [number, number]
xy = [20, 30]

function useCord(): [number, number] {
    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCord()

// named tuples
let users: [name: string, age: number]

users = ['peach', 25]
console.log(users)

let userss: (string | number | boolean)[] = []
userss = ['peach', true, 'banana', 20]

// interface
interface Author {
    name: string
    avatar: string
}

const firstAuthor: Author = {
    name: 'mario',
    avatar: 'mario.png',
}

interface Post {
    title: string
    body: string
    tags: string[]
    created_at: Date
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'curent page',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: firstAuthor,
}

function createdPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}`)
}

createdPost(newPost)

// interface in array
let post: Post[] = []
post.push(newPost)
console.log(post)

// type aliases
type Rgb = [number, number, number]

function getRondomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRondomColor()
const colorTwo = getRondomColor()
console.log(colorOne, colorTwo)

// objet literal
type User = {
    name: string
    age: number
}

const userOne: User = { name: 'mario', age: 20 }

function formatUser(user: User): void {
    console.log(`${user.name} have old ${user.age}`)
}

formatUser(userOne)
formatUser({ name: 'jhon', age: 30 })

// union type
let someId: number | string

someId = 1
someId = 'two'

let email: string | null = null

email = 'mario@gamil.com'
email = null

type Id = number | string

let anotherId: Id

anotherId = 'akl3j3la3ij43rli3'
anotherId = 2

// union type pitfall
function swapId(id: Id): Id {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    // parseInt(id)
    return id
}

swapId(5)
