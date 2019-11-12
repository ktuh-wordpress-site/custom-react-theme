import React from 'react';
import { getFullUrl, getImgAsset } from '../utils/url_utils';
import { SamePageAnchor, Glyph } from '../reusables';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as LandingPlayButton } from './LandingPlayButton';
import LandingPlayBar from './LandingPlayBar';

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
      {currentShow.title}
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
  function background() {
    return `url(${getImgAsset(`ktuhvideo${Math.ceil(Math.random() * 12)}.gif`)}`;
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top,
      navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return [<div className='landing' style={{ backgroundImage: background() }}>
      <div className='landing__box'>
        <LandingPlayBar />
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
