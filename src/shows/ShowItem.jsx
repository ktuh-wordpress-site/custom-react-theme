import React from 'react';
import { parseDate } from '../utils';
import { default as siteInfo } from '../utils/config';
import { SamePageAnchor } from '../reusables';

export default function ShowItem({
  show: {
    start, end, image, title, description, id
  }
}) {
  let startDate = parseDate(start).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }).replace(':00 ', ' '),
    endDate = parseDate(end).toLocaleTimeString({ timeZone: 'Pacific/Honolulu' }).replace(':00 ', ' '),
    fmtStr = `${startDate}-${endDate}`;

  return <div className='show-item'><div className='show-item__time-div'>
    <h4 className='show-item__start-time'>
    {startDate} -</h4>
    <h4 className='show-item__end-time'>
      {endDate}</h4></div>
  <div className='show-item__image-div'>
    <img className='show-item__image' src={image} />
  </div>
  <div className='show-item__info-container'>
    <div className='show-item__info'>
      <h5 className='show-item__info-time'>
        {fmtStr}
      </h5>
      <h4><SamePageAnchor href={`${siteInfo.siteUrl}/shows/${id}`}>
        {title}</SamePageAnchor></h4>
      <div dangerouslySetInnerHTML={{ __html: description}} />
    </div>
  </div></div>;
}
