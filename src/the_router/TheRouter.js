import React, { useState, useEffect } from 'react';
import { TheRouterContextProvider } from '../contexts/TheRouterContext';

export default function TheRouter({
  children, history, basename
}) {
  let [location, setLocation] = useState(history.location);

  useEffect(function () {
    history.listen((loc) => setLocation(loc));
  }, []);

  return <TheRouterContextProvider value={{
    history,
    location,
    basename,
    match: {
      path: '/',
      url: '/',
      params: {},
      isExact: location.pathname === '/'
    }
  }}>{children || null}</TheRouterContextProvider>;
}
