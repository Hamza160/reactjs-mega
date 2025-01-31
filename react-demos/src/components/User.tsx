
const User = ({img, name, age, isMarried, hobbies}:{img:string; name:string; age:number; isMarried:boolean; hobbies:string[]}) => {
  return (
    <section>
        <img src={img} alt={name} />
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>IsMarried: {isMarried ? 'Yes' : 'No'}</h3>
        <h4>Hobbies: {hobbies.join(', ')}</h4>
    </section>
  )
}

export default User