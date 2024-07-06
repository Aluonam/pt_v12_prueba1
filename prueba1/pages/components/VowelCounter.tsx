import React, { useState } from 'react'

const VowelCounter = () => {

    const [sentence, setSentence] = useState<string>("")
    const [counter, setCounter] = useState<number>(0)

  return (
    <>
    <h3>Vowel counter</h3>
    <input placeholder='Write a sentence' onChange={(e)=>{setSentence(e.target.value)}}></input>
    {sentence}
    </>
  )
}

export default VowelCounter