import React from 'react';
import { getUploadedImage } from '../utils/url_utils';
import { HeadStuff, BackButton } from '../reusables';

export default function Interviews() {
  return [<HeadStuff title='Interviews'/>,
      <BackButton href='podcasts' className='show__link' text="Podcasts" />,
      <div className="show__wrapper">
        <div className="show__content">
          <div className="show__image-div">
            <img className="show__image" src={getUploadedImage('2020/06/interviews.png') || getUploadedImage('2019/06/ktuh-logo.jpg')}/>
            <div className="show__info">
              <h5>Interviews conducted in Honolulu on KTUH 90.1 FM -- the station that loves you!</h5>
              </div>
          </div>
        </div>
        <div className="podcast__playlist">
          <div className="podcast__playlist-background">
            <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737994693&color=%2354544c&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            <div style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: 100
            }}>
              <a href="https://soundcloud.com/ktuh" title="KTUH" target="_blank" style={{
                color: '#cccccc',
                textDecoration: 'none'
              }}>KTUH</a> · <a
                href="https://soundcloud.com/ktuh/sets/interviews" title="Interviews" target="_blank"
                style={{
                  color: '#cccccc',
                  textDecoration: 'none'
                }}>Interviews</a></div>
          </div>
        </div>
      </div>
    ];
}
