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
//writing tailwaind css and html code in react app.jsx

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className='text-5xl bg-pink-600 text-white'>Hello guys </h1>
//     </div>
//   )
// }

// export default App



//5th code--------------------------------------------------
//form handling in reactjs and preventing the default behaviour of the form that is reloading the page everytime we submit the form

// import React, { useState } from 'react'

// const App = () => {


//   const Submithandlder =(e)=>{
//     e.preventDefault(); //func to prevent the default behaviour of the form that is reloading the page everytime we submit the form
//     console.log("Form submitted")
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         Submithandlder(e);
//       }}>
//         <input 
//         className='px-4 py-2 m-5' type="text" placeholder='Enter your name' name='name'/>
//         <button className='px-3'> Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


//6th code--------------------------------------------------
//form handling and displaying the entered value in the form with the help of useState and asking react to make changes in the DOM along with the form getting blank after we type name and click on submit


// import React, { useState } from 'react'

// const App = () => {


//   const Submithandlder =(e)=>{
//     e.preventDefault();
//     console.log(USername);
//     setUSername(''); //inout goes blank after submitting the form
//   }

//   const [USername, setUSername ] = useState('')


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         Submithandlder(e);
//       }}>
//         <input 
//         value={USername} //this is k/as 2 way binding
//         onChange={(e)=> setUSername(e.target.value)}
//         className='px-4 py-2 m-5' type="text" placeholder='Enter your name' name='name'/>
//         <button className='px-3'> Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



//------------------------------------------
//practicing 6th code again adding age alsooooooo ayayyayayayy

import React, { useState } from 'react'

const App = () => {
  
  const Submithandlder=(e)=>{
    e.preventDefault();
    console.log("Form submitted");
    setusername('');
    setage('');
  }

  const [username, setusername] = useState('')
  const [age, setage] = useState('')


  return (
    <div>
      <form onSubmit={(e)=>{
        Submithandlder(e);
      }}>
        <input 
        value={username}
        onChange={(e)=> setusername(e.target.value)} className='m-5 px-4 py-3 rounded border'
        placeholder='Enter your name' type="text" name="username" id="username" />
        <input 
        value={age}
        onChange={(e)=> setage(e.target.value)} className='m-5 px-4 py-3 rounded border'
        placeholder='Enter your age' type="number" name="age" id="age" />
        <button className='rounded p-3 m-3'>Submit </button>
      </form>
    </div>
  )
}

export default App