import { h } from 'preact'; /** @jsx h **/

export default function ({ href, text }) {
  return <p><a {...{ href }}>{text}</a></p>;
}
