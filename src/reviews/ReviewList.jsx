import React, { useState, useEffect } from 'react';
import { Paginator } from 'react-everafter';
import ReviewItem from './ReviewItem.jsx';
import { getApiRequest } from '../utils/url_utils';
import HeadStuff from '../reusables/HeadStuff.jsx';

function ReviewList() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    getApiRequest('review?_embed&per_page=42', ({ data }) => {
      setState({ reviews: data.length > 0 ? data : [] });
    });
  });

  let { reviews } = state;

  if (reviews.length) {
    return [<HeadStuff title="Reviews" headerText="Music Reviews" />,
    <div className="reviews__content">
      <Paginator wrapper={ReviewItem} truncate={true} perPage={8} items={reviews} />
    </div>];
  }
  return null;
}

export default ReviewList;
