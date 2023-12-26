"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import "./Hero.scss"
import ApexCharts from 'apexcharts'
import MyChart from '../chart/MyChart'

const Hero = () => {
  const data = useSelector(state=>state.data)
  
  
  // console.log(data.forecast.forecastday[0].hour);
  // console.log(data?.forecast?.forecastday[0].hour.map(e=>e.temp_c));
  
  return (
    <div>      
        <div className='day'>
          <h2>{data.location?.name}</h2>
          <p>{data?.current?.temp_c}<sup>c</sup></p>
          <p>{data?.current?.condition?.text}</p>
          <img src={data?.current?.condition?.icon} alt="" />
        </div>   
        <div className='chart'>
          <MyChart time={data?.forecast?.forecastday[0]?.hour.map(e=>e.time.split(" ")[1])} degree={data?.forecast?.forecastday[0].hour.map(e=>e.temp_c)} degree1={data?.forecast?.forecastday[1].hour.map(e=>e.temp_c)}/>
        </div>   
        <div>
          <p>Wind speed: {data?.current?.wind_kph} k/ph</p>
          <p>Humidity: {data.current?.humidity}%</p>
        </div>
        <div className='three-days'>
          {
            data?.forecast?.forecastday.map(e=>
              <div>
                <p>{e.date}</p>
                <img src={e.day?.condition?.icon} alt="" />
                <p>{e?.day?.maxtemp_c} / {e?.day?.mintemp_c}<sup>c</sup></p>
                <p>{e?.day?.condition?.text}</p>
              </div>
              )
          }
        </div>
    </div>
  )
}

export default Hero