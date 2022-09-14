class parent{
    show(){
        console.log("Parent class")
    }
    show2(){
        console.log("Overiding")
    }
}

class Child extends parent{
    show(){
        super.show()
        super.show2()
        console.log("Child Class")
    }
}

let obj = new Child()
obj.show()
