import React from 'react';
import { object } from 'prop-types';
import { default as momentUtil } from 'moment';

function parseUrl(description) {
  if (description) {
    let reg = /(https?:\/\/)?[a-z0-9.]+(\/[^\s\t]*)?/;
    let url = description.match(reg);
    if (url) {
      return url[0];
    }
  }
  return undefined;
}

function renderLink(description) {
  if (description) {
    return <a href={parseUrl(description)} className='home__more'>
      MORE INFO{'  '}
    </a>;
  }
  return undefined
}

function buildLink(description) {
  if (parseUrl(description)) {
    return renderLink(description);
  }
  return <a className='home__more-empty'>
    {'  '}
  </a>;
}

function EventItem({ item: event }) {
  return <div className='news-list__post-parent'>
    <h3 className="home__section">{event.summary} | {event.start.date}</h3>
    {buildLink(event.description)}
    <h3 className="home__section">{event.summary} | {momentUtil(event.start.date).format('MMMM Do')}</h3>
    <div className='event_title'>
      {momentUtil(event.start.dateTime).format('HA')} | {event.location}
    </div>
    <div className='event_title'>
      {event.description}
    </div>
  </div>;
}

EventItem.propTypes = {
  item: object
};

export default EventItem;
