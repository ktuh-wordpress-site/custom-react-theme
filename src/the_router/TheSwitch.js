import { cloneElement, isValidElement } from 'preact'; /** @jsx h **/
import React from 'preact/compat';
import { useContext } from 'preact/hooks';
import TheRouterContext from '../contexts/TheRouterContext';
import matchThePath from '../utils/match_the_path';

export default function TheSwitch(props) {
  let context = useContext(TheRouterContext);

  let location = props.location || context.location;
  let { basename } = context;

  let element, match;

  React.Children.forEach(props.children.length ? props.children : [props.children], (child) => {
    if (match == null && isValidElement(child)) {
      element = child;

      const path = child.props.path || child.props.from;

      match = path
        ? matchThePath(location.pathname.replace(basename, ''), { ...child.props, path })
        : context.match;
    }
  });

  return match ? cloneElement(element, { location, computedMatch: match }) : null;
}
