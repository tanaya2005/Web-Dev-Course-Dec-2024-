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