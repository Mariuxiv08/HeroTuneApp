import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from "firebase";
import firebaseApp from '../lib/firebase'
import firebaseUI from '../lib/firebaseUI';
import 'firebaseui/dist/firebaseui.css';

class FirebaseSign extends Component {
	componentDidMount(){
		firebaseUI.start('#firebaseui-auth-container', {
			  signInSuccessUrl: window.location.href, //window.location.host+'/home' ,
			  signInOptions: [
			    // List of OAuth providers supported.
			    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	  ],
			  // Other config options...
			});

	}

	render (){
		return(
			<div id="firebaseui-auth-container">
			ADD MORE
			
			</div>

	)}
}

export default FirebaseSign;