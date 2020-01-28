import { h } from 'preact'; /** @jsx h **/

export default function ({
  children, content, className = '', isP
}) {
  let obj = {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, Element = props => (isP ? <p {...props} /> : <div {...props} />);

  return children ? <Element {...{ className }}>{children}</Element>
    : <Element {...{ className }} {...obj} />;
}
