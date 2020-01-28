import { h } from 'preact'; /** @jsx h **/
import { default as MetaThing } from './MetaThing';
import { getImgAsset } from '../utils/url_utils';

export default function ({
  title, description, headerText, image = getImgAsset('ktuh-logo.jpg')
}) {
  return [<MetaThing {...{ image, title }} description={description || title} />,
    <h2 className='general__header'>{headerText || title}</h2>];
}
