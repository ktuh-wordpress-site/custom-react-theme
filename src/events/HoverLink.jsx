import { h } from 'preact'; /** @jsx h **/

export default function ({ children, title, ...rest }) {
  let style = {};

  if (window.innerWidth <= 800) {
    style.fontSize = '.625em';
  }

  return <a {...rest} title={title}>{children}</a>;
}
