import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()

    const handleDelete = _id => {
        console.log('delete', _id);
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