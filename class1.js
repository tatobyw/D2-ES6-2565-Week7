class Student{
    constructor(name,age,rno,br){
        this.n = name
        this.age = age
        this.rno = rno
        this.branch = br
    }
    std(){
        //console.log("Name:" + this.n "Age:" + this.age "Rno:" + this.rno)
        console.log(`Name: ${this.n} Age: ${this.age} Rno: ${this.rno}`)
    }
    set rollno(newRoll){
        this.rno = newRoll
    }
    get fullName(){
        return this.n
    }
    static std2(){
        console.log("Static Method")
    }
}

let std1 = new Student("Mark",20,101);
console.log(std1.n)
std1.std()
//setter is called
std1.rollno = 201
console.log(std1)
console.log(std1.fullName)
Student.std2()