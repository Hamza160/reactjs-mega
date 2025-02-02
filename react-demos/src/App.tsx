import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";

const App = () => {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(['Alex', 'John'])
  
  const [movie, setMovie] = useState({
    title:'Equalizer 3',
    ratings:7
  });

  const [movies, setMovies] = useState([
    {id: 1, title: 'Spider Man', ratings: 3},
    {id: 2, title: 'Super Man', ratings: 6},
  ]);

  const increment  = () => setCount(count => count + 1)
  const decrement  = () => setCount(count => count - 1)
  
  const addOneFriend = () => setFriends([...friends, 'Hamza'])
  const removeFriend = () => setFriends(friends.filter(f => f !== 'Hamza'))
  const updateOneFriend = () => setFriends(friends.map(f => f === 'Alex'? 'Alex Smith' : f))

  const handleClick = () => {
    setMovie({...movie, ratings:Math.floor(Math.random() * 5) + 1})
  }

  const handleChangeName = () => {
    setMovies(movies.map(m => m.id === 1 ? {...m, title:'John Wick 5'} : m))
  }

  return (
   <section>
    <ExampleThree />
    <hr />
    <ExampleTwo />
    <hr />
    <ExampleOne />
    <hr />
    <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
    <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)}/>
    <hr />
    <h1>Movies List</h1>
    {movies.map(m => (
      <li key={Math.random()}>{m.title}</li>
    ))}

    <button onClick={handleChangeName}>Change Name</button>

    <hr />
    <h1>{movie.title}</h1>
    <p>{movie.ratings}</p>
    <button onClick={handleClick}>Change Rating</button>
    <hr />
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