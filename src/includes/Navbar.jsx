import { h } from 'preact'; /** @jsx h **/

export default function ({ nodes, addClassName }) {
  let classes = ['nav', 'navbar-nav'];
  if (addClassName) classes.push(addClassName);
  return <ul className={classes.join(' ')}>
    {nodes.map(node => <li className='nav-item'>{node}</li>)}
  </ul>;
}
