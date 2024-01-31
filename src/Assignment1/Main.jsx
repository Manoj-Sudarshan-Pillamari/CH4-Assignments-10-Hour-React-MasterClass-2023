import React from 'react'
import imgSrc from '../logo.png'

const Main = () => {
    const hanldeIn = (event) => {
        event.target.width = 400;
        event.target.height = 400;
    }

    const handleOut = (event) => {
        event.target.width = 200;
        event.target.height = 200;
    }

    const hanldeClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log("Clicked")
    }

    const hanldeDoubleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        alert("Double Clicked")
    }

    const handleFocus = (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log("Focused on Textbox")
    }

    const handleBlur = (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log("Out of Textbox")
    }

    const handleCopy = () => {
        alert("Copy");
    }

    const handleCut = () => {
        alert("Cut");
    }

    const handlePaste = () => {
        alert("Paste");
    }

    return (
        <div style={{borderBottom:"solid 5px red"}}>
            <h1 style={{textAlign:"center"}}>Assignment1</h1>
            <img src={imgSrc} onMouseOver={hanldeIn} onMouseOut={handleOut} width={200} height={200} />
            <br />
            <input type='text' name="textBox" onFocus={handleFocus} onBlur={handleBlur} alt='logo'/>
            <br />
            <button onClick={hanldeClick} onDoubleClick={hanldeDoubleClick}>Submit</button>
            <br />
            <p onCopy={handleCopy} onCut={handleCut} onPaste={handlePaste}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    );
}

export default Main