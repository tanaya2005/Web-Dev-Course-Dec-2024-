let x=document.querySelector("h3");
setTimeout(function(){
    x.style.backgroundColor="aqua";
},2000);

let y=document.querySelector("h4");
setTimeout(function(){
    y.style.color="purple";
},3500);

setTimeout(function(){
    y.innerHTML="Letsgoooooooooooo"
    y.style.fontFamily="arial";
}, 4500);

setTimeout(function(){
    y.style.fontSize="50px";
}, 4000)