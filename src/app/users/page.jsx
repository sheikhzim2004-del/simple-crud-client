import React from 'react';
import UserTable from '../components/UserTable';
import { userData } from '../lib/data';
import { creatUser, deleteUserById } from '../lib/action';
import AddUserModal from '../components/AddUserModal';

const UsersPage = async () => {
    const users = await userData();
    return (
        <div>
            <div className='flex justify-around my-8'>
                <h2 className='text-2xl font-medium'>User Management: {users.length}</h2>
                <AddUserModal creatUserAction={creatUser}></AddUserModal>
            </div>
            <UserTable users={users} deleteUserById={deleteUserById}></UserTable>
        </div>
    );
};

export default UsersPage;