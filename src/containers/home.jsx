import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/searchbar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const API_KEY = 'AIzaSyD2nq5AO1puGS-20Y8hOaQ4iX6M01XjF_A';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null
		};

		YTSearch({key: API_KEY, term: 'j balvin'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

render () {
	return (
		<div>
		    <div className="col-md">
				    <VideoDetail video={this.state.selectedVideo} />
				  </div>
			<div className="col-md">
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
		    </div>
		</div>
  )};
}

export default Home;