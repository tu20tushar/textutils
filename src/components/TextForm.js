import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase function was called"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase", "success");
    }
    const handleLowClick=()=>{
      // console.log("Uppercase function was called"+text);
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleReverse=()=>{
    // console.log("Uppercase function was called"+text);
    let newText=text.split('').reverse().join('');
    setText(newText);
}
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText]=useState('Enter text here');
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode==='dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
        
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}> Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleReverse}>Convert it to Reverse</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>

    </>
    
  )
}
