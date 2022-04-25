import React from 'react'
import logo from '../images/logo.png'
// import Client from './Client'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
              <li><a href="/">Home</a></li>
              <li><a href="">Featured</a></li>
              <li><a href="#catalog">Products</a></li>
              <li><a href="/addProduct">Add Product</a></li>
            </ul>
          </div>
          <div className="ham">
            <span>
                <a href="#" id='pop'>
                    <svg width="30" height="30">
                        <path d="M0,5 30,5" stroke="white" stroke-width="3" />
                        <path d="M0,15 30,15" stroke="white" stroke-width="3" />
                        <path d="M0,25 30,25" stroke="white" stroke-width="3" />
                    </svg>
                </a>
            </span>
        </div>

        <div id="ham_nav" className="ham_item">
            <button type="button" id="btn-close">&times;</button>
            <ul className="side_nav">
                <li><a href="/">Home</a></li>
                <li><a href=" ">Featured</a></li>
                <li><a href="#catalog">Products</a></li>
                <li><a href="/addProduct">Add Product</a></li>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
