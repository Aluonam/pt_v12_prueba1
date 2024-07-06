import React, { useState } from 'react'

const DelLastWord = () => {

    const [sentence, setSentence] = useState("");

    const deleteLastWord = ()=>{
        const words = structuredClone(sentence).split(' ')
        words.pop()
        const allSentence = setSentence(words.join(' '))
        return(
            <h3>{allSentence}</h3>
        )
    }



  return (
    <div>
        <input placeholder='Write a sentence' onChange={(e)=>{setSentence(e.target.value)}}></input>
        <br></br>
        <button onClick={()=>{deleteLastWord()}}>Delete last word</button>
        <br></br>
        {sentence}
    </div>
  )


}

export default DelLastWord