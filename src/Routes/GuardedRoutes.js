import React, {useEffect} from "react";
import { useSelector } from "react-redux";

export function GuardedRoute() {
  const token=useSelector(state=>state.user.token)
  useEffect(() => {
   
    //let token = localStorage.getItem("userAccessToken")
    if (token === undefined || token === null || token.length === 0) {
      window.location.href = '/login'
    }
    else {
      window.location.href = '/dashboard'
    }
  },[token])

  
  

  return( 
    <>
    
  </>
 
  
  )
}
