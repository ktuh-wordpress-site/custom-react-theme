import { useContext } from 'react';
import { default as GeneralContext } from '../contexts/GeneralContext';

export default function useGeneralContext() {
  let { generalState, setGeneralState } = useContext(GeneralContext);

  return { generalState, setGeneralState };
}

export function useSlug() {
  let { generalState: { match: { params: { slug } } } } = useGeneralContext();
  return slug.replace(/\/$/, '');
}
