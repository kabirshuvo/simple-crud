
import { Link, useLoaderData } from 'react-router-dom';

const Updated = () => {

const loadedUser = useLoaderData();


    return (
        <div>
            <Link to={`/`}><button>Home</button></Link>

            <Link to={`/users`}><button>User</button></Link>
            <h3>User Upgradation of {loadedUser.name} {loadedUser.email}</h3>
        </div>
    );
};

export default Updated;