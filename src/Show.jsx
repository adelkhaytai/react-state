import React from 'react'
import react , {useState} from 'react'
import css2 from './App.css'



const Show = ( {fullname , bio , imgSrc, profession }) => {
    const [show , setShow] = useState(true)
   
    return (
           <div className='App'>
     
       {show? <h1> {fullname} <br /> {bio} <br />{profession} <br />  {imgSrc} <br />   </h1> :null}
       
        <button className='but' onClick={()=>setShow(!show) }>toggle
         </button>
         
        </div>
    
  )
}

export default Show