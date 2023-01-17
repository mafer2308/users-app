import axios from 'axios';
import React from 'react';

const UsersList = ({users, select, getUser}) => {

    const delete_users = (data) => {
        axios.delete (`https://users-crud.academlo.tech/users/${ data.id}/`)
        .then(()=>getUser())
    }
    
    return (
        <div>
            {
                users.map(users => (
                <div key={users.id}>
                    <li>{users.first_name}</li>
                    <li>{users.last_name}</li>
                    <li>{users.email}</li>
                    <li>{users.password}</li>
                    <li>{users.birthday}</li>
                    <button onClick={()=>delete_users(users)} >Delete</button>
                    <button onClick={()=>select(users)} >Select</button>
                </div>
                ))
            }
        </div>
    );
};

export default UsersList;