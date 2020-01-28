import { h } from 'preact'; /** @jsx h **/
import { useRef, useEffect, useState } from 'preact/hooks';
import { getFullUrl, getImgAsset } from '../utils/url_utils';
import { SamePageAnchor, Glyph } from '../reusables';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as EyesorePlayButton } from './EyesorePlayButton';

function LandingInfo() {
  let { currentShow, nowPlaying } = useApiRequest({
    currentShow: null,
    nowPlaying: null
  }, 'now_playing', function ([{
    show: [showNow], artist: [artistNow], song: [songNow]
  }], fxn) {
    fxn({
      currentShow: showNow,
      nowPlaying: {
        artist: artistNow,
        song: songNow,
      }
    });
  }, 30000);

  function currentShowName() {
    return <p className='landing__show-name caps'>
      {currentShow}
    </p>;
  }

  function renderNowPlaying() {
    if (!nowPlaying) return null;
    let { artist, song: title } = nowPlaying;
    return [
      <p className="landing__song-title caps">{title} </p>,
      <p className="landing__song-artist caps">{` by ${artist}`}</p>
    ];
  }

  return <div className='landing__info'>{currentShow && currentShowName()
    || (nowPlaying ? <p className='landing__now-playing'>On Air Now:</p> : null)}
      {nowPlaying ? renderNowPlaying() : [<p className='landing__show-host'>
        <b>Welcome to KTUH<br />FM Honolulu</b></p>,
      <p className='landing__host-name'>Radio for the People</p>]}</div>;
}

function Landing() {
  let int = useRef(), [bg, setBg] = useState(Math.ceil(Math.random() * 12));

  useEffect(function () {
    int = setInterval(function () {
      setBg(Math.ceil(Math.random() * 12));
    }, 9000);

    return function cleanup() {
      clearInterval(int);
      int = null;
    };
  }, []);

  function background() {
    return `url(${getImgAsset(`ktuhvideo${bg}.gif`)}`;
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top,
      navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return [<div className='landing' style={{ backgroundImage: background() }}>
      <div className='landing__box'>
        <EyesorePlayButton />
        <LandingInfo />
      </div>
      <SamePageAnchor href={getFullUrl('playlist')}>
        <h6 className='landing__current-playlist'>
          <span className='landing__view-current'>
            View Current{' '}
          </span>Playlist{'  '}
          <Glyph symbol='eye-open' />
        </h6>
      </SamePageAnchor>
      <div className='landing__down-arrow' onClick={handleClickDownArrow} />
  </div>, <div className='spacer-lg' />];
}

export default Landing;
