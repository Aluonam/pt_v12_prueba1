import React, { useEffect, useState } from 'react'

const VowelCounter = () => {

    // const [sentence, setSentence] = useState<string>("");
    const [counter, setCounter] = useState<number>(0);
    console.log("ejemplo")

    const handleVowelCounter = (sentence:string)=>{
        const vocals = ["a","o","i","e","u"]
        setCounter(0)
    //    sentence.toLowerCase().split('').forEach(x=>{
    //     if(x === 'a' || x === "e" || x === "i" || x === "o" || x === "u" )
    //         setCounter((actValue)=>actValue+1)
    //     }
    //    )

      const numberVocals =  sentence.toLowerCase().split('').reduce((acum,act)=>{
        let actualNumberOfVocals = acum
       if(vocals.some((vocal)=>vocal === act)) actualNumberOfVocals++ 
       return actualNumberOfVocals
      },0)

      setCounter(numberVocals)
    }
    

  return (
    <>
    <h3>Vowel counter</h3>
    <input placeholder='Write a sentence' onChange={(e)=>{handleVowelCounter(e.target.value)}}></input>

    {counter}

    </>
  )
}

export default VowelCounter