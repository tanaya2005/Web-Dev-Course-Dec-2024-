//filter out even elements
function odd(ele){
    if(ele%2!=0) return true;
    else return false;
}
let arr=[2,1,3,4,5,6,7,8,9]
console.log(arr)
let brr=arr.filter(odd)
console.log(brr)

//or we can write the fun inside filter only
brr=arr.filter((ele)=>ele<8)
console.log(brr)
console.log
console.log
console.log
console.log