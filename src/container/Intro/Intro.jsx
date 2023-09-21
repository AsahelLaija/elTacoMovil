import React from 'react';
import { meal } from '../../constants';
import './Intro.css';

const svgStyle = {
    color: "rgb(255, 255, 255)"
}

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (


              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="#fff" font-size={30} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={svgStyle}><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path></svg>

              /*
            <BsPauseFill color="#fff" fontSize={30} />
              */

          ) : (

              /*
            <BsFillPlayFill color="#fff" fontSize={30} />
              */

            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 16 16" 
              color="#fff" 
              font-size={30}
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg" 
              style={svgStyle}>
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
