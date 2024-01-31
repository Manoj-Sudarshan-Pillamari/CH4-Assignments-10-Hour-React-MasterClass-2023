import React from 'react'

const Main = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div style={{borderBottom:"solid 5px red",paddingBottom:"5px"}}>
      <h1 style={{textAlign:"center"}}>Assignment2</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='textBox' placeholder='Enter your text'/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Main