interface ActionBarButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ActionBarButton: React.FC<ActionBarButtonProps> = ({ icon, onClick }) => {
  const classes = 'fas ' + icon;

  return (
    <button className='button is-primary is-small' onClick={onClick}>
      <span className='icon'>
        <i className={classes} />
      </span>
    </button>
  );
};

export default ActionBarButton;
