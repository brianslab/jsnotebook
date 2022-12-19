import AddCellButton from './AddCellButton';

import './AddCell.css';

interface AddCellProps {
  prevCellID: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellID, forceVisible }) => {
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <AddCellButton type='javascript' prevCellID={prevCellID} />
        <AddCellButton type='text' prevCellID={prevCellID} />
      </div>
      <div className='divider' />
    </div>
  );
};

export default AddCell;
