import React from 'react';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { getUploadedImage } from '../utils';

export default function(){
  return [<HeadStuff title="Studio Rental" />,
    <div className="studio-rental__content">
      <h4 className="studio-rental__headline">
        KTUH’s soundproof studios are perfect for recording podcasts,
        music band sessions, etc. Studio time includes sound engineer:</h4>
    </div>];
}
