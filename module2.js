export class Greeting{
    constructor(name){
        this.n = name
    }
}

export default function hello(){
    console.log("Hello")
}

function student(){
    console.log("Jack Ma")
}

export {student as std}