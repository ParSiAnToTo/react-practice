import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {selectedUser} = useContext(UserContext);

    useEffect(() => {
        if(selectedUser && String(selectedUser.id) === id){
            setUser(selectedUser);
            setLoading(false);
            return;
        }

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            setUser(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('user data call failed: ', error);
            setLoading(false);
        });
    }, [id, selectedUser]);

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