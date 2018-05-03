import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from '../lib/firebase';
import './navbar.css';

export default class NavbarMenu extends Component {
    state ={ isSignedIn: false,
              userProfile:null
            };
    componentDidMount() {
        console.log('componentDidMount')
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user)=>{
            this.setState({isSignedIn: !!user, userProfile: user });
        })
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        this.unregisterAuthObserver();
    }

    signin(){
        console.log('logging in')
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
    }



    render() {
        const button = this.state.isSignedIn?(
            <NavItem eventKey={4} componentClass={Link} href="/profile" to="/profile">
            {this.state.userProfile.displayName}
            </NavItem>):(<NavItem eventKey={4} componentClass={Link} href="/signin" to="/signin">
                          Sign In
                        </NavItem>)
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
                         {button}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
