import { useContext } from 'preact/hooks';
import TheRouterContext from '../contexts/TheRouterContext';

export default function Redirect({ to }) {
  let { history } = useContext(TheRouterContext);

  history.replace(to);

  return null;
}
