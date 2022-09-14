//Single inheritance
class Animal{//parent class
    constructor(cname){
        this.cn = cname
    }
}

class Cat extends Animal{//child class
    cshow(){
        console.log(this.cn)
    }
}

class BabyCat extends Cat{
    color(){
        console.log("Red hair")
    }
}

let bcat = new BabyCat("Somsri")
bcat.color()
bcat.cshow()
