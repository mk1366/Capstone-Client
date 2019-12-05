import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './HeaderStylesheet.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#phones">Phones</Nav.Link>
    <Nav.Link href="#create-phone">Create Phone</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="#phones">Phones</Nav.Link>
//   </Fragment>
// )
// { alwaysOptions }

const Header = ({ user }) => (
  <Navbar className="nav-bar" variant="dark" expand="md" collapseOnSelect>
    <Navbar.Brand className="nav-bar" href="#">
      Welcome to Phone Exchange
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
