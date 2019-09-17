import React, { useState, useRef } from 'react';
import Glyph from '../reusables/Glyph.jsx';

export default function StreamPlayer() {
  let [playing, setPlaying] = useState(false), player = useRef(null);

  function handleClick() {
    player.current[playing ? 'pause' : 'play']();
    setPlaying(!playing);
  }

  return <div className="player__container">
    <audio ref={player} preload='none' src='https://128.171.43.149:8000/stream'></audio>
    <button type="button" onClick={() => handleClick()}>
      <Glyph symbol={playing ? 'pause' : 'play'} />
    </button>
    <span className="player__span">Live Broadcast</span>
  </div>;
}
