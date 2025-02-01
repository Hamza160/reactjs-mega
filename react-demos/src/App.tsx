import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(['Alex', 'John'])
  
  const [movie, setMovie] = useState({
    title:'Equalizer 3',
    ratings:7
  });

  const increment  = () => setCount(count => count + 1)
  const decrement  = () => setCount(count => count - 1)
  
  const addOneFriend = () => setFriends([...friends, 'Hamza'])
  const removeFriend = () => setFriends(friends.filter(f => f !== 'Hamza'))
  const updateOneFriend = () => setFriends(friends.map(f => f === 'Alex'? 'Alex Smith' : f))

  return (
   <section>
    <h1>{count}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    {friends.map(f => (
      <li key={Math.random()}>{f}</li>
    ))}
    <button onClick={addOneFriend}>Add New Fried</button>
    <button onClick={removeFriend}>Remove Fried</button>
    <button onClick={updateOneFriend}>Update One Friend</button>
   </section>
  );

}

export default App;