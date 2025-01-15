// import React from 'react'

// const Card2 = (props) => {
//     console.log(props)
//   return (
//     <div className='bg-black text-white text-center rounded p-4 m-10'>
//         <h1>{props.user}</h1>
//         <h1>{props.city}</h1>
//         <h1>{props.age}</h1>
//         <h1>{props.uni}</h1>
//         <button onClick={console.log("Submitted")} className='border p-2 my-3 mx-2 rounded'>Add user </button>
//     </div>
//   )
// }

// export default Card2

// The Card2 component is a functional component that takes in props as an argument. The props are then used to display the user's name, age, city, and university. The component also contains a button that logs "Submitted" to the console when clicked. The component is then exported to be used in other components.


import React from 'react'   

const Card2 = (props) => {
    console.log(props)
  return (
    <div className='bg-black text-white text-center rounded p-4 m-10'>
        <h1>{props.user}</h1>
        <h1>{props.city}</h1>
        <h1>{props.age}</h1>
        <h1>{props.uni}</h1>
        <button onClick={console.log("Submitted")} className='border p-2 my-3 mx-2 rounded'>Add user </button>
    </div>
  )
}

export default Card2