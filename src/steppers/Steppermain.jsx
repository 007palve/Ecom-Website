import React from 'react'
import Steppers from './Steppers'
import './Stepper.css'
import Customer from './Customer'
import Shpping from './Shpping'
import Payment from './Payment'
import Order from './Order'

export default function Steppermain() {
    const checkoutsteps=[
        {
            name:"Customer Info",
            component:()=><div> <Customer steps={checkoutsteps}/></div>
        },
        {
            name:"Shipping Info",
            component:()=><div><Shpping/></div>

        }, 
        {
            name:"Payment Info",
            component:()=><div><Payment/></div>

        }, 
        {
            name:"Order Info",
            component:()=><div>Order Completed</div>

        }
    ]
  return (
    <div>
        <Steppers steps={checkoutsteps}/>
    </div>
    
  )
}
