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
      console.log(data)
    }catch(err){console.log(err, "error detected")}
  }

  const dataFormatted = dataTable.map((element)=>{
    return(
                  <tr>
                    <td key={element.id}>{element.id}</td>
                    <td>{element.title}</td>
                    <td></td>
                  </tr>
          )
    
  })


  return (
    <>
      <div>TableDataPosts</div>
      <table>
        <tbody>
             {dataFormatted}
        </tbody>
      </table>
      <ModalMaterial></ModalMaterial>
    </>

  )
}

export default TableDataPosts