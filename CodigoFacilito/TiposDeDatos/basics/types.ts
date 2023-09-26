let age: number = 10
let getting: string = 'hello'
let isDone: boolean = false
let u: undefined = undefined
let n: null = null
let person: Object = { name: 'jack', age: 10 }
let fruits: string[] = ['apple', 'banana']
let fruits2: Array<string> = ['apple', 'banana']

let random: any = 666 //Pa que usarias ty si usas any?

function warnUser(): void {
  console.log('This is my warning message')
}

let response: unknown 
response = 'hello'
response = 666

let variasValores : string | number
variasValores = 'hola'
variasValores = 1


let variasValoresArrays : (string | number)[] = ['hola', 1, 2, 3, 'adiós']

type responseType = string | number

let variasValores2 : responseType
variasValores2 = 'hola'
variasValores2 = 1


//type ASSERTIONS

let message: any = 'hello world'

let messageUpperCase = (message as string).toUpperCase()

let messageUpperCase2 = (<string>message).toUpperCase()