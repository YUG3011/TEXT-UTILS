import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">{props.aboutText}</Link>
            </li>
            </ul>
          <form className="d-flex" role="search">
            <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success mx-2" type="submit">Search</button>
          </form>
          <div className="d-flex">
            <div className="bg-primary.rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:"30px",backgroundColor:"blue",cursor:"pointer",borderRadius:"50%"}}></div>
            <div className="bg-danger.rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:"30px",backgroundColor:"red",cursor:"pointer",borderRadius:"50%"}}></div>
            <div className="bg-warning.rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:"30px",backgroundColor:"yellow",cursor:"pointer",borderRadius:"50%"}}></div>
            <div className="bg-success.rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:"30px",backgroundColor:"green",cursor:"pointer",borderRadius:"50%"}}></div>
            <div className="bg-dark.rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:"30px",backgroundColor:"black",cursor:"pointer",borderRadius:"50%"}}></div>
            <div className="bg-light.rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:"30px",backgroundColor:"white",cursor:"pointer",borderRadius:"50%",border:"1px solid black"}}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

