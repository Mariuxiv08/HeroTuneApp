import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: '#eeeeee',
  },
  gridTile: {
    cursor: 'pointer',
  },
};


const GridListExampleSingleLine = (props) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.videos.map((video) => (
        <GridTile style={styles.gridTile}
          onClick={() => props.onVideoSelect(video)}
          key={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={video.snippet.thumbnails.default.url} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;