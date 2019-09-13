import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';
import siteInfo from '../utils/config';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';

function NewsPage() {
  let slug = useSlug(), [state, setState] = useState({
    post: undefined
  });

  useEffect(function () {
    getApiRequest(`posts?_embed&slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
      setState({ post: data.length > 0 ? data[0] : null });
    });
  });

  let { post } = state;

  if (post) {
    let {
        content: { rendered: content }, title: { rendered: title }, nickname, date
      } = post, dateObj = new Date(date);

    return [<HeadStuff title={title} description={renderSummary(content, 50)} />,
    <div className='show__link'>
      <SamePageAnchor href={`${siteInfo.siteUrl}/radioblog`} className='back-to'>
        ← Back to Radioblog
      </SamePageAnchor>
    </div>,
    <div className='news-item'>
      <p className='news-item__author'>
        <b>Posted by {nickname} at</b>
        <br />
        {`${dateObj.toDateString()} at ${dateObj.toLocaleTimeString()}`}
      </p>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  if (post === null) {
    return <Redirect to='/not-found' />;
  }

  if (post === undefined) {
    return null;
  }
}

export default NewsPage;
