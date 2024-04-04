
import React, { useState } from 'react'
import womens from './Womensdata'
import './Women.css'
import { Add } from '../redux/Actions'
import {  useDispatch } from 'react-redux'
export default function Womens({search}) {
  const dispatch=useDispatch()

  function send(e){
    dispatch(Add(e))
  }
  const [womensdata,setwomensdata]=useState(womens)
  
let searchdata=womensdata.filter((val)=>val.title.toLowerCase().includes(search.toLowerCase()))
console.log(searchdata)

  return (
    <div className='womens'>
        <h1 >Welcome to womens section</h1>
        <div className='grid'>
          {
            searchdata.map((val,i)=>{
              return(
             <div className='cards'>
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
