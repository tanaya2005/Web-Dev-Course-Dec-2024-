// import React from 'react'

// const App = () => {
//   const name='Tanaya'

// const abc=()=>{
//   console.log("hi");
// }
// // abc();
//   return (
//     <div>
//       <h1>hellooooooooooooooooo {name}</h1>
//       <h4>kaise hai aap </h4>
//       <p>lo bhai ban gaya react me apppppp</p>
//       <button onClick={abc}>click here</button>
//     </div>
//   )
// }

// export default App


//2nd code--------------------------------------------------

// import React from 'react'

// const App = () => {

//   let user="Tanaya"

//   const changeUser=()=>{
//     console.log(user)
//     user="Anu";
//     console.log(user)
//   }
//   // this doesnt make changes in the frontend, but only in the console, so we use react me uesstates to change it... as done in the next code
//   return (
//     <div>
//       <h1>USername is {user}</h1>
//       <button onClick={changeUser}> Change user </button>
//     </div>
//   )
// }

// export default App


//3rd code--------------------------------------------------



//3rd code-> making a button to click and COUNT++

// import React, { useState } from 'react'

// const App = () => {
//   let [count, setcount] = useState(0)

//   const increase=()=>{
//     console.log("Plus one")
//     setcount(count++)
//   }
//   return (
//     <div>
//       <h1>count= {count};</h1>
//       <button onClick={function(){
//         setcount(count+1)
//       }}>Increament</button>
//       <button onClick={function(){
//         setcount(count-1)
//       }}>Decreament</button>
//       <button onClick={()=> setcount(0)}>Reset to 0</button>
//     </div>
//   )
// }

// export default App


//4th code--------------------------------------------------
import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='text-5xl bg-pink-700 text-black'>Hello guys </h1>
    </div>
  )
}

export default App