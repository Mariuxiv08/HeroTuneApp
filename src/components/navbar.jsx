import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';


export default class NavbarMenu extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="title">HeroTune</Link>
                    </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/findhero" to="/findhero">
                        Find Your Hero!
                        </NavItem>
                         <NavItem eventKey={4} componentClass={Link} href="/signin" to="/signin">
                        Sign In
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
