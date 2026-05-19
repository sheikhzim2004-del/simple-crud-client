import React from 'react';
import UserTable from '../components/UserTable';
import { userData } from '../lib/data';

const UsersPage = async() => {
    const users = await userData();
    return (
        <div>
            <h2>User Management: {users.length}</h2>
            <UserTable users={users}></UserTable>
        </div>
    );
};

export default UsersPage;