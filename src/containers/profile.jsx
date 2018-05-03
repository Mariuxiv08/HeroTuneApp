import React, {Component} from 'react';
import firebase from '../lib/firebase';

export default class UserProfile extends Component {
	state ={ isSignedIn: false,
              userProfile:null,
              doc:null
            };
	componentDidMount() {
		const db = firebase.firestore();
        console.log('componentDidMount')
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user)=>{
        	if (user) {
        		db.collection('Users').where('uid', '==', user.uid).limit(1).get().then((snapshot)=>{
        			snapshot.forEach((doc)=>{
        				this.setState({isSignedIn: !!user, userProfile: user, doc:doc.data()});

        			});
        		})
        	}
         
        })
    }
	render () {
		return (
			<div>
				<h2> Hello {this.state.doc?this.state.doc.name:'loading...'}!</h2>
				<p>THIS IS USER PROFILE</p>
				<button>I want to be a Hero</button>
			</div>
		)
	}
}