// function hello(){
// console.log("hello")
// }
// function mello(){
// console.log("mello")
// }
// setTimeout(hello,2*1000)
// setTimeout(mello,4*1000)

// //another method to write a callback func in settimeout
// setTimeout(function(){
//     console.log("hello")
// }, 5*1000)

// //we can make a timer this way->
// for(let i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

//ulta timer? can we?
for(let i=10;i>=0;i--){
    setTimeout(function(){
        console.log(i)
    },(10-i)*100)
}
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()