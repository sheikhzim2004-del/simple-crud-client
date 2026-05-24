import { getUserById } from '@/app/lib/data';
import React from 'react';

const userDetailsPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    console.log(user);

    return (
        <div>
            <h2>user details: {user.name}</h2>
        </div>
    );
};

export default userDetailsPage;