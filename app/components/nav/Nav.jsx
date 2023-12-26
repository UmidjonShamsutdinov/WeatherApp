"use client"
import { weatherApi } from '@/app/lib'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch()
    const [location, setLocation] = useState("")


    const handleChooseLovation = async (e)=>{
        e.preventDefault()
        try {
            const data = await weatherApi(location)        
            data && dispatch({type:"WEATHER", data})
        } catch (error) {
            console.log(error);
        }
    }

    
  return (
    <nav>
        <form onSubmit={(e) => handleChooseLovation(e)}>
            <input type="text" placeholder='Location' onChange={(e)=>setLocation(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </nav>
  )
}

export default Nav