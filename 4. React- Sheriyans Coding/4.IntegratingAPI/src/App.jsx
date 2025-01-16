import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

const [data, setdata] = useState([])

  const getdata= async()=>{
  const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
  setdata(response.data)
  console.log(data[0].download_url)
  }
  return (
    <div className='m-10'>
      <button onClick={getdata} className='bg-teal-700 active:scale-90 text-white font-semibold rounded text-xl px-8 py-3'>Get data</button>
      <div className='p-5 mt-5 bg-pink-200 text-black'>
        {
          data.map(function(elem, idx){
            return (<div key={idx} className='p-5 bg-blue-300 flex items-center justify-between w-50 px-6 py-6 rounded mb-3 text-black'>
              <img className='h-50 w-100' src={elem.download_url} alt="" />
            </div>)
          
          })
        }
      </div>
    </div>
  )
}

export default App