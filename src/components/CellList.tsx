import { Fragment } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';

import './CellList.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell prevCellID={cell.id} />
    </Fragment>
  ));

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells.length === 0} prevCellID={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
