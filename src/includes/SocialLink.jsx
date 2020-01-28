import { h } from 'preact'; /** @jsx h **/
import { getImgAsset as getImg } from '../utils/url_utils';

export default function ({ src, href }) {
  return <a {...{ href }} target="_blank" rel="noopener noreferrer">
    <img src={getImg(src)} />
  </a>;
}
