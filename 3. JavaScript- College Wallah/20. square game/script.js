let s1=document.getElementById("one")

s1.addEventListener("mouseenter", function(){
    s1.innerHTML=Math.floor(Math.random()*100);
})

s1.addEventListener("mouseleave", function(){
    s1.innerHTML=1;
})



let s2=document.getElementById("two");
let clr="red";
s2.addEventListener("mouseenter", function(){
    if(clr=="red"){
        s2.style.backgroundColor="red";
        clr="green";
    }
    else{
        s2.style.backgroundColor="green";
        clr="red"
    }
})

s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor="white";
})



let s3=document.getElementById("three");
s3.addEventListener("mouseenter", function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${a}, ${b}, ${c})`;
});
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor="white";
})




let s4=document.getElementById("four");
s4.addEventListener("click", function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    s1.style.backgroundColor=  `rgb(${255}, ${a}, ${255})`
    s2.style.backgroundColor=  `rgb(${b}, 255, 255)`
    s3.style.backgroundColor=  `rgb(255, 255,${c})`
})

s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})


let cursor=document.getElementById(".cursor");
let main=document.getElementById("Main");

main.addEventListener("mousemove", function(dets){
    console.log(dets.x,dets.y)
    cursor.style.top=dets.y + "px";
    cursor.style.left=dets.x + "px";
})