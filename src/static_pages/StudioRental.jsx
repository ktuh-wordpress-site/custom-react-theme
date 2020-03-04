import React from 'react';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { getUploadedImage } from '../utils';

export default function(){
  return [<HeadStuff title="Studio Rental" />,
    <div className="studio-rental__content">
      <h3 style= "textAlign: center" className="studio-rental__headline">
        KTUH’s soundproof studios are perfect for recording podcasts,
        music band sessions, etc. Studio time includes sound engineer:</h3>

      <div className="studio_img">
        <img className="studio_img" src={getUploadedImage('studio-rental.jpg')} alt="" width="413" height="253" />
        <p>$150/ hour recording</p>
      </div>

      <div className="studio_img">
        <img className="studio_img" src={getUploadedImage('studio-rental 2.jpg')} alt="" width="413" height="253"/>
        <p>KTUH affiliate discounts available</p>
      </div>
    </div>];
}
