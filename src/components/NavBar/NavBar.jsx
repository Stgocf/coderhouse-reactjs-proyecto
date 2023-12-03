//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './NavBar.css'
import  { CarWidget } from '../CarWidget/CarWidget'
import logo from '../../assets/logo.jpg'
import { NavLink, Link } from 'react-router-dom'

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
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/category/Necklaces' className="nav-link">Necklaces</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Earrings" className="nav-link">Earrings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Bracelets" className="nav-link">Bracelets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Rings" className="nav-link">Rings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Brooches" className="nav-link">Brooches</NavLink>
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
