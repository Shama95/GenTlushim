import React from 'react'
import { useState } from "react"
import CSVReader from 'react-csv-reader'

import '../CSS/otzar.css'

function Otzar() {

  const [mails, setMail] = useState([])
  const [numbers, setnumbers] = useState([])
  const [value, setValue] = useState('')
  const [success, setSuccess] = useState(false)
  const [file, setFile] = useState(false)
  let final ={numbers,mails} //change file to json!!


  const handleMiClick = () => {
    //change to adir component
    if (value === '' || mails.some((val) => val === value))
      return;
    setMail([...mails, value])
    setValue('')
  }

  const handleSubmit = () => {
    setSuccess(true)
    console.log(final)
    //upload to the server

  }

  const handleData = (data) => {
    let arr=[]
    data.map((row) => {
      return arr.push(row[0])
      
    })
    if (arr.length > 0)
      setnumbers(arr.slice(1,arr.length-1))
      setFile(true)

  }



  return (

    <div className={success ? "ui form success flex" : "ui form flex"}  >
      <div className="ui success message">
        <div className="header">Completed</div>
        <p>You'll get an email when the process is done.</p>
      </div>
      <div className="field">
        <label>Source:</label>
        {/* <input type="file" onChange={(e)=> setFile(e.target.files[0])} /> */}
        <CSVReader onFileLoaded={(data, fileInfo) => handleData(data)} />

      </div>
      <div className="field">
        <label>Send notification to: </label>

        <div className="ui action input">
          <input type="text" onKeyPress={(e) => e.charCode === 13 ? handleMiClick() : null} placeholder="Mispar Ishi" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="ui button" onClick={handleMiClick} >Add</button>
        </div>
      </div>
      <div>
        <ul className="list-icon">
          {mails.map((mail) => {
            return <li key={mail} title="Tap to remove" onClick={(e) => setMail(mails.filter(mail => e.target.innerText !== mail))}> {mail}</li>;
          }
          )}
        </ul>
      </div>

      <div className={file ? "ui submit button " : "ui submit button disable"} onClick={() => handleSubmit()} >Submit</div>
    </div>

  );
}

export default Otzar;