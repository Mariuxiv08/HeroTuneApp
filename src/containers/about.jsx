import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap'
import './about.css'


export default class About extends Component {
	render () {
		return (
			<Grid>
				<Jumbotron>
					<h2>This is our Story</h2>
					<p> We envision the struggles that every day people experience. This doesn't mean that they
					can't find support. I've created this site so people can feel identified with some of these
					stories. The people that have been interviewed here are some people that I admire and that
					no matter what they're still working on themselves, on improving and get better</p>
					<Link to="/about">
					<Button bsStyle="primary">About</Button>
					</Link>
				</Jumbotron>
				<Row className="show-grid text-center">
					<Col xs={12} sm={4} className="person-wrapper">
					<Image src="./assets/founder.jpg" circle className="about-pic" />
					<h3>Mariuxi Vasconez - Founder</h3>
					</Col>
				</Row>
			</Grid>
		)
	}
}