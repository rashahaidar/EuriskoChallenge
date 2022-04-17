import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export const Header = () => {

 const navigate = useNavigate();
  const handleClick=()=>{
      window.localStorage.clear()
      navigate(`/Login`)
  }

  return (
    <div className='header'>
       <button type="button" className="btn btn-secondary btn-sm" onClick={handleClick}>Logout</button>
    </div>
  )
}
