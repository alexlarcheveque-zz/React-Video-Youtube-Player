import React from "react";
import Comment from "./Comment";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Enter a search term, and press "Enter" </div>;
  }

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title} </h4>
        <p> {video.snippet.description} </p>
      </div>
      <h3 class="ui dividing header"> Comments </h3>
      <Comment content="Great video!" />
      <Comment content="Loved that <3" />
      <Comment content="First" />
    </div>
  );
};

export default VideoDetail;
