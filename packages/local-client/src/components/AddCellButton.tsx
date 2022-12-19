import { useActions } from '../hooks/useActions';
import { CellTypes } from '../state';

interface AddCellButtonProps {
  type: CellTypes;
  prevCellID: string | null;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({ type, prevCellID }) => {
  const { insertCellAfter } = useActions();

  return (
    <button
      className='button is-rounded is-primary is-small'
      onClick={() => insertCellAfter(prevCellID, type)}
    >
      <span className='icon is-small'>
        <i className='fas fa-plus' />
      </span>
      <span>{type === 'javascript' ? 'Code' : 'Text'}</span>
    </button>
  );
};

export default AddCellButton;
