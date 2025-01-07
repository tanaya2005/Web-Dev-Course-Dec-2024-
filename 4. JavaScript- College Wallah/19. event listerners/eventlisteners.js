// website pe koi bhi cheez click/ hover karne se jo changes we need to bring in the site, that is k/as "eventlistener"
let x=document.getElementById("first")
// x.style.color="yellow";
// x.style.backgroundColor="red";
x.addEventListener("click", function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

let y=document.getElementById("second")
y.addEventListener("mouseenter", function(){
    y.style.color="white";
    y.style.backgroundColor="black";
})

let z=document.getElementById("fourth")
y.addEventListener("click", function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
    z.innerHTML="why change texts when we can change personality"
})

let a=document.getElementById("third");
z.addEventListener("mouseenter", function(){
    a.style.textAlign="center";
})
z.addEventListener("mouseleave", function(){
    a.style.textAlign="right";
})


