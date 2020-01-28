import { h } from 'preact'; /** @jsx h **/

export default function ({ children, ...rest }) {
  return <div {...rest} style={{
    width: '100%',
    height: '350px'
  }}>{children}</div>;
}
