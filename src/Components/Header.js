import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {

  setTimeout(() => {
    let x = document.getElementById('pop');
    let y = document.getElementById('btn-close');

    x.addEventListener('click', function () {
      document.getElementById("ham_nav").style.height = "250px"
    })

    y.addEventListener('click', function () {
      document.getElementById("ham_nav").style.height = "0px"
    })
  }, 10);

  return (
    <>
      <header id="main-header">
        <img src={logo} alt="logo" id='logo'/>
          <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="">Featured</Link></li>
              <li><Link to="#catalog">Products</Link></li>
              <li><Link to="/admin">Add Product</Link></li>
            </ul>
          </div>
          <div className="ham">
            <span>
                <Link to="#" id='pop'>
                    <svg width="30" height="30">
                        <path d="M0,5 30,5" stroke="white" strokeWidth="3" />
                        <path d="M0,15 30,15" stroke="white" strokeWidth="3" />
                        <path d="M0,25 30,25" stroke="white" strokeWidth="3" />
                    </svg>
                </Link>
            </span>
        </div>

        <div id="ham_nav" className="ham_item">
            <button type="button" id="btn-close">&times;</button>
            <ul className="side_nav">
                <li ><Link to="/">Home</Link></li>
                <li ><Link to=" ">Featured</Link></li>
                <li ><Link to="#catalog">Products</Link></li>
                <li ><Link to="/admin">Add Product</Link></li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
