import React, { useState } from 'react'

export default function About(props) {
    const [Btn, setBtn] = useState("enable dark mode")
    const [MyStyle, setMyStyle] = useState({
        color: 'black',
        backgrondColor: 'blue',
        border: '2px solid red'
    })
    let AllStyle={
      color:props.mode ==='dark'?'green':'red',
      backgrondColor: props.mode === 'dark'?'green':'green',
      border: props.mode === 'dark'?"2px solid orange":'2px solid black'
    }
    const darkmode=()=>{
       if(MyStyle.color === 'black'){
        setMyStyle({

            color: 'oreange',
            backgrondColor:'green',
            border: '2px solid orange'
        })
        setBtn("enable white mode")
    }
        else{
            setMyStyle({ 
                color: 'black',
                backgrondColor:'white',
                border: '2px solid black'
        })
        setBtn("enable dark mode")
    }
}
    
  return (
    <>
    <div style={AllStyle}>
    <div className="accordion" id="accordionExample" style={AllStyle}>
  <div className="accordion-item" style={AllStyle}>
    <h2 className="accordion-header" style={AllStyle}>
      <button className="accordion-button" style={AllStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={AllStyle}>
      <div className="accordion-body" style={AllStyle}>
        <p style={AllStyle}>This is the first item's accordion body. </p> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={AllStyle}>
    <h2 className="accordion-header" style={AllStyle}>
      <button className="accordion-button collapsed" style={AllStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={AllStyle}>
      <div className="accordion-body" style={AllStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={AllStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={AllStyle}>
      <div className="accordion-body" style={AllStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary my-2"  onClick={darkmode}>{Btn}</button>
    </div>
    </>
  )
    }

