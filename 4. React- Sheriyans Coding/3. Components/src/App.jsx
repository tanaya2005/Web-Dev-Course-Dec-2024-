
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



// for the 2nd code in Cad2.jsx

// import React from 'react'
// import Card2 from './Components/Card2'
// const App = () => {
//   return (
//     <div className='p-8 justify-center flex gap=10'>
//       <Card2 user="Tanaya" age='19' city="Thane" uni="Mumbai"/>
//       <Card2 user="Ananya" age='16' city="Thane" uni="Mumbai"/>
//     </div>
//   )
// }

// export default App




//code for 2nd code in Card.jsx file where we use JSON data to display the user's name, age, city, and university and image. The component also contains a button that logs "Submitted" to the console when clicked.

import React from 'react'
import Card from './Components/Card'

const App = () => {
  const user = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 24,
      "university": "New York University",
      "image": "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      "name": "Bob Williams",
      "city": "San Francisco",
      "age": 27,
      "university": "University of California, Berkeley",
      "image": "https://randomuser.me/api/portraits/men/20.jpg"
    },
    {
      "name": "Clara Smith",
      "city": "Chicago",
      "age": 22,
      "university": "University of Chicago",
      "image": "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      "name": "David Brown",
      "city": "Austin",
      "age": 26,
      "university": "University of Texas at Austin",
      "image": "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      "name": "Eva Davis",
      "city": "Seattle",
      "age": 25,
      "university": "University of Washington",
      "image": "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      "name": "Frank Harris",
      "city": "Boston",
      "age": 23,
      "university": "Harvard University",
      "image": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      "name": "Grace Lee",
      "city": "Los Angeles",
      "age": 28,
      "university": "University of California, Los Angeles",
      "image": "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
      "name": "Henry Miller",
      "city": "Denver",
      "age": 29,
      "university": "University of Denver",
      "image": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      "name": "Ivy Wilson",
      "city": "Phoenix",
      "age": 21,
      "university": "Arizona State University",
      "image": "https://randomuser.me/api/portraits/women/70.jpg"
    },
    {
      "name": "Jack Martinez",
      "city": "Miami",
      "age": 25,
      "university": "University of Miami",
      "image": "https://randomuser.me/api/portraits/men/70.jpg"
    }
  ]

  return (
    <div className=' grid grid-cols-5'>
      {user.map(function(user, key){
        return <Card key={key} user={user.name} city={user.city} age={user.age} university={user.university} img={user.image}/>
      })}
    </div>
  )
}

export default App