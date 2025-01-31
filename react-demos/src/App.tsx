import Card from "./components/Card";
import Cart from "./components/Cart";
import Greeting from "./components/Greeting";
import Password from "./components/Password";
import ProductInfo from "./components/ProductInfo";
import User from "./components/User";
import Weather from "./components/Weather";
 
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
      <hr />
      <h1>User Component</h1>
      <User
        img="https://avatars.githubusercontent.com/u/69757932?v=4&size=64"
        name="Hamza Ashraf"
        age={28}
        isMarried={true}
        hobbies={['Book Reading', 'Development', 'Gyming']}
      />
      <hr />
      <Card>
        <h1>My Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus aut ratione maiores cum quidem. Repudiandae perferendis voluptate debitis aliquid, nobis quia soluta, cupiditate recusandae inventore natus dolores est distinctio.</p>
      </Card>
      <hr />
      <Password isValid={false}/>
      <hr />
      <Cart />
      <hr />
      <Weather temprature={20}/>
   </main>
  )
}

export default App;