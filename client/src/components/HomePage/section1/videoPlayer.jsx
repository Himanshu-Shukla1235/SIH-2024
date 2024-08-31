import React from "react";
import "./videoplayer.css";
import ReactPlayer from "react-player/youtube";

function Videoplayer() {
  return (
    <>
    <div className="border-ani">
      <div className="Intro_video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=q2BbKMfsrKk&t=49s"
          width="50vh"
          height="auto"
          controls={true}
          playing={false}
          config={{
            youtube: {
              playerVars: { modestbranding: 1, rel: 0, showinfo: 0 }
            }
          }}
        />
      </div>
      </div>
    </>
  );
}

export default Videoplayer;
