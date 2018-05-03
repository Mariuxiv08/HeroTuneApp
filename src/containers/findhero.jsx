import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
  height: 75,
  width: 75,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};



class Findhero extends Component {
	
	render (){
		return(
		<MuiThemeProvider>
			<div>
			    <Paper style={style} zDepth={2} circle={true} />
			</div>
		  </MuiThemeProvider>
	)}
}

export default Findhero;