
const ComponentOne = ({count, onClickHandler}:{count:number; onClickHandler:() => void}) => {
  const handleClick = () => onClickHandler()
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ComponentOne;