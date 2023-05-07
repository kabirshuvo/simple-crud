import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert(`deleted Successfully`);
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
        .catch(error => console.error(error))
        
    }
    return (
        <div>
            <Link to={`/`}><button>Home</button></Link>
            <h3>Users Count {users.length}</h3>
            {
                users.map(user => <p 
                    key={user._id}
                    >
                        {user.name} 
                        {user.email}
                        <button 
                        style={{marginLeft: '1rem'}}
                        onClick={() => handleDelete(user._id)}
                        
                        ><small >X</small></button>
                        </p>)
            }
        </div>
    );
};

export default Users;