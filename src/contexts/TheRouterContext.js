import { h, createContext } from 'preact'; /** @jsx h **/

const TheRouterContext = createContext();

export default TheRouterContext;

const { Provider } = TheRouterContext;

export const TheRouterContextProvider = ({ value, children }) => (
  <Provider value={value}>{children}</Provider>
);
