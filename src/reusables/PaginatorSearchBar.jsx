import { h } from 'preact'; /** @jsx h **/
import { useContext } from 'preact/hooks';
import { default as PaginatorControlContext } from './PaginatorControlContext';

export default function PaginatorSearchBar() {
  let { state: { query }, dispatch } = useContext(PaginatorControlContext);

  function handleSearchChange(event) {
    dispatch({ type: 'query', val: event.target.value });
  }

  return <input type="text" placeholder="Search" value={query || ''}
    onChange={handleSearchChange}/>;
}
