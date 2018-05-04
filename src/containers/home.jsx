import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/searchbar';
import GridListExampleSingleLine from '../components/video_list';
import VideoDetail from '../components/video_detail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './home.css';

const API_KEY = 'AIzaSyD2nq5AO1puGS-20Y8hOaQ4iX6M01XjF_A';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null
		};

		YTSearch({key: API_KEY, term:'qgGATIVOZyM'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

render () {
	return (
		<div>
		<p className="subheader">HeroTune Stories, helping insipring others!</p>
		    <div className="col-md">
				    <VideoDetail video={this.state.selectedVideo} />
				  </div>
			<div className="col-md video_list">
				<MuiThemeProvider>
					<GridListExampleSingleLine onVideoSelect={(video)=>this.setState({selectedVideo:video})} videos={this.state.videos} />
				</MuiThemeProvider>
		    </div>
		</div>
  )};
}

export default Home;