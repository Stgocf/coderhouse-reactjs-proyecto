//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './NavBar.css'
import  { CarWidget } from '../CarWidget/CarWidget'
import logo from '../../assets/logo.jpg'

export const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="60" height="60"/>
          </a>
          <ul className="nav navbar-nav" id="navbarNav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Brands</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Inspirations</a>
            </li>
            <li className="nav-item">
              <CarWidget />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
