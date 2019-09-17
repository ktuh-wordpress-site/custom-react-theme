import React from 'react';
import MetaThing from './MetaThing.jsx';
import { getImgAsset } from '../utils/url_utils';

export default function HeadStuff({
  title, description, headerText, image = getImgAsset('ktuh-logo.jpg')
}) {
  return [<MetaThing {...{ image, title }} description={description || title} />,
    <h2 className='general__header'>{headerText || title}</h2>];
}
