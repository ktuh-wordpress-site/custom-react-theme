export function returnPathKeys(path) {
  let found = path.match(/:[A-Za-z]+/g), keys = [];
  if (found) {
    for (let f = 0; f < found.length; f++) {
      keys.push(found[f].substring(1));
    }
  }

  return {
    regex: new RegExp(path.replace(/:[A-Za-z]+\//g, '(.+)\\/')
      .replace(/:[A-Za-z]+$/, '(.+)')),
    keys
  };
}

export default function matchThePath(pathname, { path, exact }) {
  if (typeof path !== 'string') {
    return path.map(p => matchThePath(pathname, { path: p, exact })).find(t => t != null);
  }
  if (path === '*') {
    return {
      path,
      url: pathname,
      params: {}
    };
  }
  if (path === '/' && pathname === '/') {
    return {
      path: '/',
      url: pathname,
      params: {}
    };
  }
  if (path === '/' && pathname.length) {
    return null;
  }
  let { regex, keys } = returnPathKeys(path), params = {},
    res = pathname.match(regex);

  if (!res) return null;

  for (let k = 0; k < keys.length; k++) {
    params[keys[k]] = res[k + 1];
  }

  return {
    path,
    url: path,
    params
  };
}
