import React, { useState } from 'react'

export default function Steppers({steps}) {
    console.log(steps.length)
    const[currentstep,setcurrentstep]=useState(1)
    const[iscomplete,setiscomplete]=useState(false)
    function handlenext(){
        setcurrentstep((prevstep)=>{
            if(prevstep==steps.length){
                setiscomplete(true)
                return prevstep

            }else{
                return prevstep + 1
            }
        })}

        function cal(){
            return(
                (currentstep-1)/(steps.length-1)*100
            )
        }
        function handleprev(){
            setcurrentstep((prevstep)=>{
                if(prevstep===1){
                    setiscomplete(true)
                    return 1
    
                }else{
                    return prevstep - 1
                }
            })}
       

  return (
    <div><h1>Checkout</h1>
    <div className='steppermain'>
       {
        steps.map((step,index)=>{
            return(
                <div className='stepperparent' key={index}>
                    <div className={`steppernum  
                    ${currentstep>index +1 || iscomplete ?"complete":""}
                    ${currentstep === index + 1 ? "active" : ""}` } >
                        {currentstep>index +1 || iscomplete ?<span><i className="fa-solid fa-check"></i></span>:index+1}
                     
                    </div>
                <div className='steppername'>
                {step.name}
                </div>
                </div>
            )
        })
       }
        </div>
        <div className='progressbar'>
<div className='progress' style={{width:`${cal()}%`}}>
    
</div>
        </div>
       
        <br/>
        
{
            steps[currentstep -1].component()
        }

{
            !iscomplete ?
        <div>

        <button className='prev' onClick={handleprev} disabled={currentstep==1}>Prev</button>
        <button className='next' onClick={handlenext}>{(currentstep===steps.length)? "Finish":"Next"}</button>
        </div>
        :
        <div>
    </div>
}
        </div>
        
  )
}
