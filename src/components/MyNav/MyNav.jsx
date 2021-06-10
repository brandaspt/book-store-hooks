import { Component } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import rbsLogo from "../../rbsLogo.svg"

class MyNav extends Component {
  render() {
    return (
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={rbsLogo} width="30" height="30" className="d-inline-block align-top" /> {this.props.shopName}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/browse" className="nav-link">
                Browse
              </Link>
            </Nav>
            <Link to="/register" className="nav-link btn btn-sm btn-primary ml-auto d-inline-block">
              Register
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MyNav
