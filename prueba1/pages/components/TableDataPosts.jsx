import React, { useEffect, useState } from 'react'
import ModalMaterial from './ModalMaterial'

const TableDataPosts = () => {

  const [dataTable, setDataTable] = useState([])

  useEffect(() => {
    dataAPI()
  }, [])
  

  const dataAPI = async ()=>{
    try{
      const url = `https://jsonplaceholder.typicode.com/posts`
      const call = await fetch(url)
      const data = await call.json()
      setDataTable(data)
    }catch(err){console.log(err, "error detected")}
  }

  const dataFormatted = dataTable.map((element)=>{
    return(
                  <tr>
                    <td key={element.id}>{element.id}</td>
                    <td key={element.title}>{element.title}</td>
                    <td><ModalMaterial sentenceBody={element.body}></ModalMaterial></td>
                  </tr>
          )
    
  })


  return (
    <>
    <h2>First Task: "Table with API and Material UI</h2>
      <table>
        <tbody>
             {dataFormatted}
        </tbody>
      </table>

    </>

  )
}

export default TableDataPosts