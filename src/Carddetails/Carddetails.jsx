import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './Carddetails.css'
import { Button } from '@mui/material'
import { Add, Desc, Remove } from '../redux/Actions'
export default function Carddetails() {
const [data,setdata]=useState([])
  const id= useParams().id
  console.log(id)
  const getdata=useSelector((state)=>state.Reducers.cart)
  // console.log(getdata)
  function datawrap(){
   let filterdata = getdata.filter((val)=>{
    return val.id==id
  })
  setdata(filterdata)

}
useEffect(()=>{
datawrap()
},[id])
const dispatch = useDispatch()
function send(e){
  dispatch(Add(e))
}
function decrement(items){
  dispatch(Desc(items))
}
const navigate=useNavigate()
function del(id){
dispatch(Remove(id))
navigate("/")
}
const [selectedcolor,setselectedcolor]=useState('')
console.log(selectedcolor)
function changecolor(color){
  setselectedcolor(color)
}
  return (
    <div>
        <h1>Prouct Details Page</h1>
        <div className='carddetailsmain'>
            {
              data.map((val,i)=>{
                // console.log(val.color)
                return(
                  <div className='carddetails' key={i} > 
                  <div className='img'>
                    {
                 selectedcolor && 
                 val.color.find((color)=>color.colorid===selectedcolor)
                 ?
                 
                 <img src={val.color.find((color)=>color.colorid===selectedcolor).clrimg}/>
                 :
                 <img src={val.imgurl}/>


                    }
      
                  </div>
                  <div className='cardcontent'>
                  <h3>{val.title}</h3>
                    <h4>Rating:{val.Rating}</h4>
                    <div className = "product-price">
        <p className = "last-price">Old Price: <span>₹{val.OPrice}</span></p>
        <p className = "new-price">New Price: <span>₹{val.disprice}</span></p>
        <h3>About this Product:</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente eos illum illo assumenda, at optio hic deleniti commodi! Laborum est voluptatum reiciendis officiis accusantium nihil, obcaecati corporis in quas!</p>
        <div className="row">
	        				<div className="col-md-6">
	        					<label for="size">Size:</label>
								<select id="size" name="size" className="form-control">
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
	        				</div>
                 
	        				<div className="col-md-6">
	        					<label for="color">Color:</label>
								<select id="color" name="color" onChange={(e)=>{changecolor(e.target.value)}} className="form-control">
                <option>Selectcolor</option>
                 
                  {
                    val.color.map((color)=>{
                      return(
                        <>
									<option value={color.colorid}>{color.colorid}</option>

                        </>
                      )
                    })
                  }
									
								</select>
	        				</div>
                  <div className='singletotal'>
                      <h3>Total:₹{val.disprice*val.Quantity}</h3>   

                  </div>
	        			</div>
	        			<div className="product-count">
	        				<label for="size">Quantity:</label>
	        				<form action="#" className="display-flex">
							    <div className="qtyminus" onClick={val.Quantity <=1 ? ()=>del(val.id):()=>decrement(val)}>-</div>
							    <input type="text" name="quantity" value={val.Quantity} className="qty"/> 
							    <div className="qtyplus" onClick={()=>send(val)}>+</div>
							</form>
      </div>
        
        <br/>
        <button className='cart1'>Add to cart</button>
      </div>
                    
                  </div>
              </div>

                )
              })
            }
           
           </div>
    </div>
  )
}
