import { useTypedSelector } from './useTypedSelector';

export const useCumulativeCode = (cellID: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const renderFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';

        var render = (value) => {
          const root = document.querySelector('#root');

          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root)
            } else {
               root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        };
      `;
    const renderFuncNoop = 'var render = () => {}';
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === 'javascript') {
        if (c.id === cellID) {
          cumulativeCode.push(renderFunc);
        } else {
          cumulativeCode.push(renderFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cellID) {
        break;
      }
    }
    return cumulativeCode.join('\n');
  });
};
