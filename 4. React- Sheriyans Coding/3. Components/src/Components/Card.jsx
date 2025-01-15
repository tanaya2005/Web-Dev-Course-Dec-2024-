import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
        <h1 className='text-4xl'>Username is {props.a}</h1>
    </div>
  )
}

export default Card