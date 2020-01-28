import { h } from 'preact'; /** @jsx h **/
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as DonateButton } from './DonateButton';

export default function () {
  let text = useApiRequest('', 'support_text');

  return <div className='support'>
    <h1 className='support__heading'>College Radio Needs Your Support!</h1>
    <p className='support__about'>{text}</p>
    <DonateButton />
  </div>;
}
