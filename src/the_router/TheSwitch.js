import React, { cloneElement, useContext } from 'react';
import TheRouterContext from '../contexts/TheRouterContext';
import matchThePath from '../utils/match_the_path';

export default function TheSwitch(props) {
  let context = useContext(TheRouterContext);

  let location = props.location || context.location;
  let { basename } = context;

  let element, match;

  React.Children.forEach(props.children, (child) => {
    if (match == null && React.isValidElement(child)) {
      element = child;

      const path = child.props.path || child.props.from;

      match = path
        ? matchThePath('/' + location.pathname.replace(new RegExp(basename + '\\/?', 'g'), ''), { ...child.props, path })
        : context.match;
    }
  });

  return match ? cloneElement(element, { location, computedMatch: match }) : null;
}
