import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'

export default function Footer() {

    const {state,dispatch} = useContext(FormContext);

    const handlePage = ()=>{
        dispatch({type:'SET_PAGE',payload:(state.page+1)});
    }

  return (
    <>
     {/* <div>Footer</div>
     <button onClick={handlePage}>Next Page </button> */}
    </>
   
  )
}
