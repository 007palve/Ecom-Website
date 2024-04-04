import React, { useState } from 'react'
import mens from './Mensdata'
import './Menss.css'
import { Add } from '../redux/Actions'
import {  useDispatch } from 'react-redux'
export default function Mens({search}) {
  const dispatch=useDispatch()
  function send(e){
    dispatch(Add(e))
  }
  const [mensdata,setmensdata]=useState(mens)
  console.log(mensdata)
let searchdata=mensdata.filter((val)=>val.title.toLowerCase().includes(search.toLowerCase()))
console.log(searchdata)

  return (
    <div className='mens'>
        <h1 >Welocme to mens section</h1>
        <div className='grid'>
          {
            searchdata.map((val,i)=>{
              return(
             <div className='cards' key={i}>
            <div className='cardimg'>
              <img src={val.imgurl}/>

            </div>
            <div className='contents'>
              <h3>{val.title}</h3>
              <p>Rating:{val.Rating}</p>
              <p>MRP ₹{val.OPrice}</p>
              <p>Free delivery over {val.disprice}</p>
              <button onClick={()=>send(val)}>Add to cart</button>
            </div>

          </div>
              )
            })
          
}
        </div>
        
    </div>
  )
}
