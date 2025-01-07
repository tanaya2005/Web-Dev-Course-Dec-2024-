let x=document.getElementById("main")


let arr=["https://i.pinimg.com/236x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg","https://i.pinimg.com/236x/08/9a/2f/089a2f7c15b409a64bd0c9511acabe5c.jpg","https://i.pinimg.com/236x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg","https://i.pinimg.com/236x/08/e7/f3/08e7f3f45fd3a34c7e7afdfd2e589e6a.jpg","https://i.pinimg.com/236x/c8/8d/2d/c88d2da29b40958925213d3f2acecbf2.jpg"];

var string="";
for(let i=1;i<45;i++){
    let r=Math.floor(Math.random()*5);
    string+= `<div class="card">
    <img src="${arr[r]}" alt="">
</div>`;
}
x.innerHTML=string;