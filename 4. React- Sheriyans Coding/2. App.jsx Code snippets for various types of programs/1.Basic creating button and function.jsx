import React from 'react'

const App = () => {
  const name='Tanaya'

const abc=()=>{
  console.log("hi");
}
// abc();
  return (
    <div>
      <h1>hellooooooooooooooooo {name}</h1>
      <h4>kaise hai aap </h4>
      <p>lo bhai ban gaya react me apppppp</p>
      <button onClick={abc}>click here</button>
    </div>
  )
}

export default App