import { h } from 'preact'; /** @jsx h **/
import TheRedirect from '../the_router/TheRedirect';

export default function ({ check }) {
  return (check === null) ? <TheRedirect to='/not-found' /> : null;
}
