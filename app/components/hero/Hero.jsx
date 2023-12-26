"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "./Hero.scss"
import MyChart from '../chart/MyChart'

const Hero = () => {
  const data = useSelector(state=>state.data)
  
  
  
  return (
    data ? <div>      
    <div className='day'>
      <h2>{data.location?.name}</h2>
      <p>{data?.current?.temp_c}°C</p>
      <p>{data?.current?.condition?.text}</p>
      <img src={data?.current?.condition?.icon} alt="" />
    </div>   
    <div className='chart'>
      <MyChart time={data?.forecast?.forecastday[0]?.hour.map((e,i)=>{e.time.split(" ")[1]})} degree={data?.forecast?.forecastday[0].hour.map(e=>e.temp_c)}/>
    </div>   
    <div>
      <p>Wind speed: {data?.current?.wind_kph} km/h</p>
      <p>Humidity: {data.current?.humidity}%</p>
    </div>
    <div className='three-days'>
      {
        data?.forecast?.forecastday.map((e,i)=>
          <div key={i}>
            <p>{e.date}</p>
            <img src={e.day?.condition?.icon} alt="" />
            <p>{e?.day?.maxtemp_c} / {e?.day?.mintemp_c}°C</p>
            <p>{e?.day?.condition?.text}</p>
          </div>
          )
      }
    </div>
</div>: <p>Loading...</p>
  )
}

export default Hero