import { h } from 'preact'; /** @jsx h **/

export default function ({ symbol }) {
  return <span className={`glyphicon glyphicon-${symbol}`} />;
}
