import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const Container = styled.div`
  box-shadow: 0 0 2rem gray;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  max-width: 720px;
  display: flex;
`;

const Details = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  box-shadow: 0 -3.75rem 3rem -3rem black inset;
  pointer-events: none;
`;

const DetailsLower = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 0.75rem;
  box-sizing: border-box;
`;

const Progress = styled.div`
  height: 3px;
  background-color: red;
  width: 100%;
  margin: 1px 0;
  cursor: pointer;
  &:hover {
    height: 5px;
    margin: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Player() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const onPlay = () => {
    setPaused(false);
  };
  const onPause = () => {
    setPaused(true);
  };
  const toggleVideo = () => {
    if (paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <Container>
      <Video
        ref={videoRef}
        onPlay={onPlay}
        onPause={onPause}
        onClick={toggleVideo}
      >
        <source src="f1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Details>
        <DetailsLower>
          <Progress />
          <Controls>
            {paused ? (
              <PlayArrowIcon
                style={{ fontSize: '32px' }}
                onClick={toggleVideo}
              />
            ) : (
              <PauseIcon style={{ fontSize: '32px' }} onClick={toggleVideo} />
            )}
          </Controls>
        </DetailsLower>
      </Details>
    </Container>
  );
}

export default Player;
