import React from 'react'
import profilepic from "../images/profilepic.png"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Enter Product</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Graphs</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Product Recommandations</a>
        </li>
      </ul>
      <div className='d-flex'>
      <button type="button" class="btn btn-primary">LOGOUT</button>
      <img className="mx-4 profilepic"src={profilepic} style={{width:'40px',borderRadius:"500px"}} alt="logo" />
      </div>
    </div>
  </div>
</nav>
  )
}
