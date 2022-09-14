//1.setInterval
//global object
// console.log(global);
let i = 0

setInterval(
    function () {
        i++
        console.log(i)
    }, 1000
)

//2.setTimeout
setTimeout(function(){
    console.log("hi")
    clearInterval(intStop)
},3000)
//setInterval
const intStop = setInterval(() => {
    console.log("How Are You")
},1000)
