import useFetch from "./useFetch"

const App = () => {
  const [todosData] = useFetch(`https://jsonplaceholder.typicode.com/todos`)
  const [usersData] = useFetch(`https://jsonplaceholder.typicode.com/users`)

  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
      <div>
        {todosData && todosData.map(item => {
          return (
            <p key={item.id}>{item.title}</p> 
          )
        })}
      </div>
      <div>
      {usersData && usersData.map(item => {
          return (
            <p key={item.id}>{item.name}</p> 
          )
        })}
      </div>
    </div>
  )
}

export default App;