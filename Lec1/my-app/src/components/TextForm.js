import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperClick = ()=> {
        console.log("button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick =()=> {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const handleOnChange = (event)=> {
        console.log("button Clicked")
        setText(event.target.value);
    }
    const handleClearClick = ()=> {
        setText('');
    }
    const handleCopyClick = ()=> {
        navigator.clipboard.writeText(text);
    }
    const handleRemoveSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
   <>
    <div className='container'   style= {{color: props.mode === 'dark' ? 'white' : 'black'}}
>
    <h2>{props.heading} </h2>
<div className="mb-3">
  <textarea className="form-control" 
  style= {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
color: props.mode === 'dark' ? 'white' : 'black'}}
  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpperClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button> 
<button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button> 
<button className='btn btn-primary mx-2' onClick={handleRemoveSpace}>Remove Extra Spaces</button> 
 
    </div>
    <div className='container my-3 ' style= {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} caracters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
   </>
  )
}

export default TextForm
