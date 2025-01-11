
import React from 'react'

const App = () => {

  let user="Tanaya"

  const changeUser=()=>{
    console.log(user)
    user="Anu";
    console.log(user)
  }
  return (
    <div>
      <h1>USername is {user}</h1>
      <button onClick={changeUser}> Change user </button>
    </div>
  )
}

export default App