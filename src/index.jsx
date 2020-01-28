import { h, render } from 'preact'; /** @jsx h **/
import TheBrowserRouter from './the_router/TheBrowserRouter';
import { default as siteInfo } from './utils/config';
import App from './application/App';

render(<TheBrowserRouter basename={siteInfo.siteUrl.match(/\/[a-z-]*\/?$/)[0]}>
  <App /></TheBrowserRouter>, document.getElementById('react-root'));
