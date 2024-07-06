import React, { useState } from 'react'

const ActualHourButton = () => {

  const [time, setTime] = useState("00:00:00")

 

  const handleActualTime = ()=>{
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const all = hours +':'+ minutes+':'+ seconds
    setTime(all)
  }
  

  return (
    <>
    <h3>The time is...</h3>
    {time}
    <button onClick={()=>{handleActualTime()}}>¿Current time?</button>

    </>

  )
}

export default ActualHourButton