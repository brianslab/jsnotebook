import { useActions } from '../hooks/useActions';
import ActionBarButton from './ActionBarButton';
import './ActionBar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <ActionBarButton icon='fa-arrow-up' onClick={() => moveCell(id, 'up')} />
      <ActionBarButton
        icon='fa-arrow-down'
        onClick={() => moveCell(id, 'down')}
      />
      <ActionBarButton icon='fa-times' onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
