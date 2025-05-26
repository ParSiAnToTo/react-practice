import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            setUser(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('user data call failed: ', error);
            setLoading(false);
        });
    }, [id]);

    if(loading) return <p>loading...</p>
    if(!user) return <p>can't find user data</p>

    return (
        <div>
            <h2>{user.name}'s detail data</h2>
            <p>📧 : {user.email}</p>
            <p>📱 : {user.phone}</p>
            <p>🏢 : {user.company.name}</p>
            <p>🌐 : {user.website}</p>
        </div>
    )
}

export default UserDetail