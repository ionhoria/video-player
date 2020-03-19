import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  max-width: 720px;
  display: flex;
`;

const Details = styled.div`
  width: calc(100% - 24px);
  position: absolute;
  bottom: 0;
  color: white;
  opacity: 100%;
  transition: opacity 0.2s;
  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0%;
    `}
`;

const Gradient = styled.div`
  width: 100%;
  background-repeat: repeat-x;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
  position: absolute;
  bottom: 0;
  height: 98px;
  transform: rotate(180deg);
  pointer-events: none;
  opacity: 100%;
  transition: opacity 0.2s;
  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0%;
    `}
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
  transition-delay: 2s;
`;

function Player() {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
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
    <Container
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Video
        ref={videoRef}
        onPlay={onPlay}
        onPause={onPause}
        onClick={toggleVideo}
      >
        <source src="f1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Gradient visible={paused || hovered} />
      <Details visible={paused || hovered}>
        <Progress />
        <Controls>
          {paused ? (
            <PlayArrowIcon style={{ fontSize: '32px' }} onClick={toggleVideo} />
          ) : (
            <PauseIcon style={{ fontSize: '32px' }} onClick={toggleVideo} />
          )}
        </Controls>
      </Details>
    </Container>
  );
}

export default Player;
