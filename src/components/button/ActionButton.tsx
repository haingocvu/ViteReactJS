interface ActionButtonProps {
  action: () => void;
  label: string;
}

const ActionButton = (props: ActionButtonProps) => {
  const { action, label } = props;
  return <button onClick={action}>{label}</button>;
};

export default ActionButton;
