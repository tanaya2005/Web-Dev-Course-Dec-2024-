// import React from 'react'

// const Card = (props) => {
//     console.log(props)
//   return (
//     <div>
//         <h1 className='text-4xl'>Username is {props.a}</h1>
//     </div>
//   )
// }

// export default Card

//making use of JSON data in the Card component to display the username, city, photo, and age of the user. The component also contains a button that logs "Submitted" to the console when clicked. The component is then exported to be used in other components.

import React from 'react'

const Card = (props) => {
    console.log(props)
    const clickHandler = () => {
      console.log("user added")}
  return (
    <div className='m-3 bg-black text-white text-center rounded p-4 m-10  '>
        <img className='m-auto h-28 w-28 rounded-full mb-3' src={props.img} alt="" />
        <h1 className='text-xl font-semibold'>{props.user}</h1>
        <h1>{props.city}, {props.age}</h1>
        <h1 className='text-blue-500'>{props.university}</h1>
        <button onClick={clickHandler} className='bg-white text-black px-3 py-2 m-3 rounded'>Add user</button>
    </div>
  )
}

export default Card