import React from 'react'

const Main = () => {
    const handleChange = (event) => {
        if(event.key === "Enter")
        {
            alert("Key got Triggered")
        }
    }

  return (
    <div style={{borderBottom:"solid 5px red",paddingBottom:"5px"}}>
      <h1 style={{textAlign:"center"}}>Assignment3</h1>
        <input type='text' name='textBox' onKeyPress={handleChange}/>
    </div>
  )
}

export default Main