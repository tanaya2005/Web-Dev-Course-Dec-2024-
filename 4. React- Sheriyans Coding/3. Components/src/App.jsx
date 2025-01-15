
// import './App.css'
// import Navbar1 from './Components/Navbar1'
// import Navbar2 from './Components/Navbar2'
// import Main from './Components/Main'

// function App() {

//   return (
//     <>
//       <nav className='flex justify-between w-4/5 m-auto text-xl font-bold font' >
//         <Navbar1></Navbar1>
//         <Navbar2></Navbar2>
//       </nav>
//       <Main></Main>
//     </>

//   )
// }

// export default App


// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   let a = 10;
//   return (
//     <div>
//       <Card a={a}></Card>
//       <Card a='20'></Card>
//       <Card a='30'></Card>
//       </div>
//   )
// }

// export default App


import React from 'react'
import Card2 from './Components/Card2'
const App = () => {
  return (
    <div className='p-8 justify-center flex gap=10'>
      <Card2 user="Tanaya" age='19' city="Thane" uni="Mumbai"/>
      <Card2 user="Ananya" age='16' city="Thane" uni="Mumbai"/>
    </div>
  )
}

export default App