import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  const myName = 'Hamza Ashraf';
  const multiplay = (a:number, b:number) => a * b
  const specialClass = 'special-class'
  const numbers = [1,2,3,4,5]
  const usersInfo = [
    {
      username:"Hamza160",
      email:"hamzaashraf160@gmail.com",
      location:'PAK'
    },
    {
      username:"Talha",
      email:"talhaashraf160@gmail.com",
      location:'PAK'
    },
    {
      username:"Ibrahim",
      email:"ibrahimashraf160@gmail.com",
      location:'PAK'
    }
  ]
  return (
   <main>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friend list: {['Alex', 'John', 'Jorden']}</p>
      <p>2 * 2 = {multiplay(2, 2)}</p>
      <div className={specialClass}>This is special class</div>
      <hr />
      <Greeting />
      <hr />
      <ProductInfo />
      <hr />
      List Section
      <ul>
        {numbers.map(number => (
          <li key={Math.random()}>{number}</li>
        ))}
      </ul>
      <hr />
      <h1>Users object Array</h1>
        {usersInfo.map(({username, email, location}) => (
        <ul key={username}>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Location: {location}</li>
        </ul>
        ))}
   </main>
  )
}

export default App;