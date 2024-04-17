import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (

    <>
      <div className="headerFont">MainHeader</div>

      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>

    </>
  )
}

export default MainHeader