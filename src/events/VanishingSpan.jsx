import React from 'react';

export default function ({ children, ...rest }) {
  let style = {};
  if (window && window.innerWidth <= 800) {
    style.display = 'none';
  }
  return <span {...{ style }} {...rest}>{children}</span>;
}
