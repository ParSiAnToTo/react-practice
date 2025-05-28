import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"; 
import axios from 'axios';


function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setSelectedUser } = useContext(UserContext);

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
                        <Link to={`/users/${user.id}`} onClick={() => setSelectedUser(user)}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;