import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'
export default function Header() {
  return (
    <div className='header_container'>
       
       <h2>Registration Form </h2>
       <p>Please fill out this form with the required information</p>
       <div className="header_nav">
          <HeaderNav text={'Personal Information'} num={1} />
          <HeaderNav text={'Educational Background'} num={2}/>
          <HeaderNav text={'Work Exprirence with Company '} num={3}/>

       </div>

    </div>
  )
}
