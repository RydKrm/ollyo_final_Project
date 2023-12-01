import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FormContext } from '../../context/FormContext'
export default function HeaderNav({text,num}) {

    const {state} = useContext(FormContext);
    const [color,setColor] = useState(null);
    const [numColor,setNumColor] = useState(null);

    useEffect(()=>{
      if(num===state.page){
          setColor('blue')
          setNumColor('white')
      } else if(num<state.page){
        setColor('blue');
        setNumColor('white')
      }
      else {
        setColor('white');
        setNumColor('black')
      }   
    },[num,state.page])


  return (
   <div className="nav_single_item">
            <h1 style={{ backgroundColor:color,color:numColor}}>{num}</h1>
            <p className='header_num_text'> {text} </p>
    </div>
  )
}
