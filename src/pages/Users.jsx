import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //when page mounted
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('API call failed: ', error);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>loading...</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name} ({user.email})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;