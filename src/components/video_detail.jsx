import React from 'react';

const VideoDetail = ({video}) => {
	if (!video){
		return <div> Loading...</div>;
	}


	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	console.log(url);

	return (
		<div className="container">
			<div className="row">
				<div className = "col-md-1"> </div>
				<div className="video-detail col-md-10">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe className="embed-responsive-item" src={url}></iframe>
					</div>
					<div className="details">
						<div>{video.snippet.title}</div>
						<div>{video.snippet.description}</div>
					</div>
				</div>
				<div className = "col-md-1"> </div>
			</div>
		</div>

		);

};

export default VideoDetail;