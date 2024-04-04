import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar/Navbar';
import {Route,Routes} from 'react-router-dom';
import Mens from './Mens/Mens';
import Womens from './Womens/Womens';
import Kidss from './Kids/Kidss';
import Section from './Section/Section';
import Mainpage from './Mainpage';
import Carddetails from './Carddetails/Carddetails';
import Section1 from './Section/Section1';
import Steppermain from './steppers/Steppermain';
import Shpping from './steppers/Shpping';
import Payment from './steppers/Payment';
import Steppers from './steppers/Steppers';

// import './App.css'


function App() {
  const [search,setsearch]=useState('')

  return (
    <>
 <Navbar search={search} setsearch={setsearch}/>
 {/* <Section/> */}
 

 <Routes>
 <Route path='/' element={<Mainpage/>}/>
 <Route path='/shop' element={<Section1/>}/>

  <Route path='/mens' element={<Mens search={search} setsearch={setsearch}/>} />
  <Route path='/womens' element={<Womens search={search} setsearch={setsearch}/>} />
  <Route path='/kids' element={<Kidss search={search} setsearch={setsearch} />} />
  <Route path='/carddetails/:id' element={<Carddetails/>}/>
  <Route path='/checkout' element={<Steppermain/>}/>
  {/* <Route path='/shipping' element={<Shpping/>}/>
  <Route path='/sub' element={<Payment/>}/>
  <Route path='/subm' element={<Steppers/>}/> */}

 </Routes>
    </>
  )
}

export default App
