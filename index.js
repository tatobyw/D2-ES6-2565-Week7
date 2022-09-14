import {Greeting, std} from './module2.js'
import hello from './module2.js'

import {department, tasks } from './module.js'
import {greetPerson} from './module.js'

//Greeting
let user = new Greeting("Mark")
console.log(user.n)

hello()
std()

let displayName = greetPerson("Jack")
console.log(displayName)

console.log(department)
console.log(tasks)
