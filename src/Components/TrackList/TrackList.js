import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
render() {
  return (
    <div className="TrackList">
    {
      this.props.tracks.map(track=>
       {
         return <Track onAdd={this.props.onAdd}key={track.id} onRemove={this.props.onRemove} track={track} />
       })
    }
    </div>
  );
  }
}


export default Tracklist;
