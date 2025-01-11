let arr=[6,12,-1,-9,4,11]
console.log(arr)

//for negative nos, it gives galat ans toh we cant use direct inbuilt sort method; thus we use custom method->stated in line 14 onwards
console.log(arr.sort())


//descending order
arr=arr.sort(function(a,b){
return b-a;
})
console.log(arr)

//ascending order- THE RIGHT WAY
arr=arr.sort(function(a,b){
    return a-b;
    })
    console.log(arr)

console.log
console.log
console.log
console.log