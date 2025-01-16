import React from 'react'
import myPhoto from '../Image/myphoto.jpg';

const About = () => {
  return (
    <div className='text-3xl font-semibold text-center flex flex-col items-center py-10'>
      <img className='mx-auto' src={myPhoto} alt="this is me" />
      <h3 className='m-2'> I am Tanaya&lt;3🎀</h3>
      <h3 className='m-2'> 19, Thane📍</h3>
      <h5> And I am on my journey to become a great developer 💻</h5>
    </div>
  )
}

export default About