import { Link } from 'react-router-dom';
import './App.css';

function App() {

const handleAddUser = event => {
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name, email}

  console.log(user);

  fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      alert('Users added successfully')
      form.reset();
    }
  })
  .catch(error => console.error(error))
}
  return (
    <>
     <Link to={`/users`}><button>Users</button></Link>
      <h2>
        Simple CRUD Learning
      </h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Your Name Please'/> <br />
        <input type="email" name="email" placeholder='Your Email Please'/> <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
