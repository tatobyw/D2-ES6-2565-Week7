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

let cat1 = new Cat("Somsri")
cat1.cshow()