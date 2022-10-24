import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState("")
    // text = "welcome to react"; wrong way to change state
    //setText("good bye !!!");  correct way to change state
    const toUpperCase = () =>{
        //("Upper Case Button Clicked")
        let newText = text;
        setText(newText.toUpperCase());
        props.showAlert("success","converted to upper case !!");
    }
    const toLowerCase = () =>{
        let newText = text;
        setText(newText.toLowerCase());
        props.showAlert("success","converted to lower case !!");
    }
    const valueChange = (event) =>{
        setText(event.target.value)
    }
    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("success","cleared !!");
    }
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#092a46'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={valueChange} style={{backgroundColor:props.mode === 'dark' ? '#092a46' : 'white',color:props.mode === 'dark' ? 'white' : '#092a46'}} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={toLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="className container my-2" style={{color:props.mode === 'dark' ? 'white' : '#092a46'}}>
        <h2>Your Text Summary</h2>
        <p>Your text contains {text.length > 0 ? text.split(" ").length : "0"} words and {text.length} characters</p>
        <p>{text.length > 0 ? 0.008 * text.split(" ").length : "0"} Minutes Read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in above text box to preview it here"}</p>
    </div>
    </>
  )
}
