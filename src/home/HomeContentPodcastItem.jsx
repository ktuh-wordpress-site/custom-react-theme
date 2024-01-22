import React from 'react';
import { SamePageAnchor } from '../reusables';
import { getFullUrl, getUploadedImage } from '../utils/url_utils';

//TODO: add _embedded field to podcast api and return items dynamically
let mobile = window.innerWidth <= 870 ? true : false;

export default function () {

  const pod1 = (
    <div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}>
      <img className="podcast__image" src={getUploadedImage('2020/03/The-Future-Accords.jpg')}
        href={getFullUrl('podcasts/the-future-accords')}/>
        <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}>
          <h4 className="home__title">The Future Accords</h4>
        </SamePageAnchor>
      </SamePageAnchor>
    </div>
  );

  const pod2 = (
    <div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}>
     <img className="podcast__image" src={getUploadedImage('2020/06/kwoktalk.png')}
       href={getFullUrl('podcasts/kwok-talk')}/>
       <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}>
         <h4 className="home__title">Kwok Talk</h4>
       </SamePageAnchor>
     </SamePageAnchor>
   </div>
  );

  const pod3 = (
    <div className='home_podcast-item'>
      <SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}>
        <img className="podcast__image" src={getUploadedImage('2020/07/news.png')}
          href={getFullUrl('podcasts/ktuh-news')}/>
          <SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}>
            <h4 className="home__title">KTUH News</h4>
          </SamePageAnchor>
    </SamePageAnchor>
  </div>
  );

  let podcastsList = [pod1, pod2, pod3];

  if (window && window.innerWidth < 890) {
    podcastsList = [pod1, pod2];
  }
  if (window && window.innerWidth < 650) {
    podcastsList = [pod1];
  }

  return podcastsList;
}
