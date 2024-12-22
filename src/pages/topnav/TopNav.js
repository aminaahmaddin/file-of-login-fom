// import {Link} from 'react-router-dom'
import './TopNav.css'
import {Container,Navbar,Nav} from "react-bootstrap"

    const TopNav = () => {
  return (
    <Navbar className="nav">
       <Container>
    <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}


export default TopNav
