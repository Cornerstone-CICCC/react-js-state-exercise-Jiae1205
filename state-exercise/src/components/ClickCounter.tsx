type ClickCounterProps = {
  onClick: () => void;
};

const ClickCounter = ({ onClick }: ClickCounterProps) => {
  return <button onClick={onClick}>Click Counter</button>;
};

export default ClickCounter;
