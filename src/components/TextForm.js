import React,{useState} from 'react'

export default function TextForm(props) {
    const handleclClick=()=>{
        let newText = "";
        setText(newText)
        props.ShowAlert("CLEAR has been enable","success")
    }
    const handlervClick=()=>{
        let newText = text.split("").reverse().join("");
        setText(newText)
        props.ShowAlert("REVERSE has been enable","success")
    }
    const handleloClick=()=>{
        console.log("you click on lowercase")
        let newText = text.toLowerCase()
        setText(newText)
        props.ShowAlert("LOWERCASE has been enable","success")
    }
    const handleUpClick = ()=>{
        console.log("click done"+ text)
        let newText = text.toUpperCase()
        setText(newText)
        props.ShowAlert("UPPERCASE has been enable","success")
    }
    const handleOnChange = (events)=>{
        console.log("on chanhe fire")
        setText(events.target.value);
    }

    const[text,setText] = useState("")
    
    return (
        <>
        <div>
            
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <br></br>
                <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success mx-5 my-1" onClick={handleUpClick} padding="mx-14" style={{border:"2px solid black"}}>uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-5 my-1" onClick={handleloClick}style={{border:"2px solid black"}}>lowercase</button>
            <button disabled={text.length===0} className="btn btn-warning mx-5 my-1" onClick={handlervClick} style={{border:"2px solid black"}}> reverse </button>
            <button disabled={text.length===0} className="btn btn-danger  mx-5 my-1" onClick={handleclClick}style={{border:"2px solid black"}}
            >cleartext</button>
        </div>
        <div className="container my-5" >
            <h2>YOUR TEXT SUMMARY :</h2>
                <p>text length is {text.length}</p>
                <p>text word length is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <p>wods are read in  {0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} second</p>
                <h2>preveiw</h2>
                <p>{text}</p>
        </div>
        </>
    )
}
