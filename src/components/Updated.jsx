
import { Link, useLoaderData } from 'react-router-dom';

const Updated = () => {

const loadedUser = useLoaderData();

const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email)
    const updatedUser = {name, email};

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert(`user updated successfully`)
        }
    })
}


    return (
        <div>
            <Link to={`/`}><button>Home</button></Link>

            <Link to={`/users`}><button>User</button></Link>
            <h3>User Upgradation of {loadedUser.name} {loadedUser.email}</h3>

        
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="name" defaultValue={loadedUser.name} style={{marginBottom:'1rem'}}/>
                <br  />
                <input type="email" name="email" id="email" defaultValue={loadedUser.email} style={{marginBottom:'1rem'}}/>
                <br />
                <input style={{paddingRight:'1rem', paddingLeft:'1rem' }} type="submit" value="update" />
            </form>
        </div>
    );
};

export default Updated;