// let h1=document.querySelector(".main")
// h1.innerHTML="<h1>hello from CSS</h1>"


//using react via CDN and ont downloading all that npm install create recat app blab bla

var h1=React.createElement('h1',null, "Hello from React");        

var parent=document.querySelector("#parent")
console.log(parent)
var root= ReactDOM.createRoot(parent)
root.render(h1)
console.log(ReactDOM)