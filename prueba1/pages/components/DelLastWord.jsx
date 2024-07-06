import React, { useState } from 'react'

const DelLastWord = () => {

    const [sentence, setDentence] = useState([]);



  return (
    <div>
        <input placeholder='Write a sentence' onChange={(e)=>{setDentence(e.target.value)}}></input>
    </div>
  )
}

export default DelLastWord